using API.core.Infrastructure;
using API.core.Models.Account;
using API.Repository.Common;
using API.Repository.Database;
using API.Repository.FullTextCatalog;
using API.Repository.Functions;
using API.Repository.LeftMenu;
using API.Repository.SchemaRepository;
using API.Repository.StoreProcedure;
using API.Repository.Table;
using API.Repository.Triggers;
using API.Repository.UserDefinedDataType;
using API.Repository.View;
using API.Repository.XMLSchemaCollections;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Distributed;
using Quartz;
using StackExchange.Redis;
using System.Reflection;
using System.Security.Cryptography.X509Certificates;
using Microsoft.OpenApi.Models;
using static OpenIddict.Abstractions.OpenIddictConstants;
using OpenIddict.Validation.AspNetCore;
using API.Authorization;
using API.core.Services.Account;
using API.Authorization.Requirements;
using API.Configuration;
using API.core.Services.Account.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using API.core.Services.Shop.Interfaces;
using API.core.Services.Shop;
using API.core.Services;
using API.Services.Email;
using Microsoft.AspNetCore.Authorization;
using API.Services;
using Microsoft.IdentityModel.Logging;

internal class Program
{
  private static async Task Main(string[] args)
  {
    var builder = WebApplication.CreateBuilder(args);

    // ==================== CONFIGURATION ====================
    ConfigureAppConfiguration(builder);

    // ==================== DATABASE & IDENTITY ====================
    var connectionString = GetConnectionString(builder.Configuration);
    ConfigureDatabase(builder.Services, connectionString);
    ConfigureIdentity(builder.Services);

    // ==================== OPENIDDICT & AUTHENTICATION ====================
    ConfigureQuartz(builder.Services);
    ConfigureOpenIddict(builder.Services, builder.Environment, builder.Configuration);
    ConfigureAuthentication(builder.Services);
    ConfigureAuthorization(builder.Services);

    // ==================== REDIS CACHING ====================
    ConfigureRedis(builder.Services, builder.Configuration);

    // ==================== CORS ====================
    ConfigureCors(builder.Services);

    // ==================== CONTROLLERS & SWAGGER ====================
    ConfigureControllersAndSwagger(builder.Services);

    // ==================== APPLICATION SERVICES ====================
    ConfigureApplicationServices(builder.Services);

    // ==================== REPOSITORIES ====================
    RegisterRepositories(builder.Services);

    // ==================== LOGGING & EMAIL ====================
    ConfigureLoggingAndEmail(builder);

    // ==================== BUILD & CONFIGURE APP ====================
    var app = builder.Build();

    ConfigureMiddleware(app);
    ConfigureSwaggerUI(app);

    // ==================== DATABASE SEEDING ====================
    await SeedDatabase(app);

    app.Run();
  }

  #region Configuration

  private static void ConfigureAppConfiguration(WebApplicationBuilder builder)
  {
    builder.Configuration.Sources.Clear();
    builder.Configuration
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
        .AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", optional: true)
        .AddEnvironmentVariables()
        .AddCommandLine(builder.Configuration.GetValue<string[]>("CommandLineArgs") ?? Array.Empty<string>());
  }

  private static string GetConnectionString(IConfiguration configuration)
  {
    return configuration.GetConnectionString("DefaultConnection") ??
           throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
  }

  #endregion

  #region Database & Identity

  private static void ConfigureDatabase(IServiceCollection services, string connectionString)
  {
    var migrationsAssembly = typeof(Program).GetTypeInfo().Assembly.GetName().Name;

    services.AddDbContext<ApplicationDbContext>(options =>
    {
      options.UseSqlServer(connectionString, b => b.MigrationsAssembly(migrationsAssembly));
      options.UseOpenIddict();
    });
  }

  private static void ConfigureIdentity(IServiceCollection services)
  {
    services.AddIdentity<ApplicationUser, ApplicationRole>()
        .AddEntityFrameworkStores<ApplicationDbContext>()
        .AddDefaultTokenProviders();

    services.Configure<IdentityOptions>(options =>
    {
      // User settings
      options.User.RequireUniqueEmail = true;

      // Password settings (commented out for now)
      /*
      options.Password.RequireDigit = true;
      options.Password.RequiredLength = 8;
      options.Password.RequireNonAlphanumeric = false;
      options.Password.RequireUppercase = true;
      options.Password.RequireLowercase = false;

      // Lockout settings
      options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
      options.Lockout.MaxFailedAccessAttempts = 10;
      */

      // Configure Identity to use the same JWT claims as OpenIddict
      options.ClaimsIdentity.UserNameClaimType = Claims.Name;
      options.ClaimsIdentity.UserIdClaimType = Claims.Subject;
      options.ClaimsIdentity.RoleClaimType = Claims.Role;
      options.ClaimsIdentity.EmailClaimType = Claims.Email;
    });
  }

  #endregion

  #region OpenIddict & Authentication

  private static void ConfigureQuartz(IServiceCollection services)
  {
    services.AddQuartz(options =>
    {
      options.UseSimpleTypeLoader();
      options.UseInMemoryStore();
    });

    services.AddQuartzHostedService(options => options.WaitForJobsToComplete = true);
  }

  private static void ConfigureOpenIddict(IServiceCollection services, IWebHostEnvironment environment, IConfiguration configuration)
  {
    services.AddOpenIddict()
        .AddCore(options =>
        {
          options.UseEntityFrameworkCore()
                  .UseDbContext<ApplicationDbContext>();
          options.UseQuartz();
        })
        .AddServer(options =>
        {
          options.SetTokenEndpointUris("connect/token");

          options.AllowPasswordFlow()
                  .AllowRefreshTokenFlow();

          options.RegisterScopes(
                  Scopes.Profile,
                  Scopes.Email,
                  Scopes.Address,
                  Scopes.Phone,
                  Scopes.Roles);

          ConfigureOpenIddictCertificates(options, environment, configuration);

          options.UseAspNetCore()
                  .EnableTokenEndpointPassthrough();
        })
        .AddValidation(options =>
        {
          options.UseLocalServer();
          options.UseAspNetCore();
        });
  }
 
     private static void ConfigureOpenIddictCertificates(
        OpenIddictServerBuilder options,
        IWebHostEnvironment environment,
        IConfiguration configuration)
  {
    if (environment.IsDevelopment())
    {
      options.AddDevelopmentEncryptionCertificate()
          .AddDevelopmentSigningCertificate();
    }
    else
    {
      // Example certificate configuration in appsettings.json:
      // "OIDC": {
      //   "Certificates": {
      //     "Path": "certificates/oidc-signing-cert.pfx",
      //     "Password": "YourSecurePasswordHere"
      //   }
      // }
      // 
      // Generate a certificate using:
      // dotnet dev-certs https -ep certificates/oidc-signing-cert.pfx -p YourSecurePasswordHere
      // Or use OpenSSL:
      // openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
      // openssl pkcs12 -export -out oidc-signing-cert.pfx -inkey key.pem -in cert.pem

      var oidcCertFileName = configuration["OIDC:Certificates:Path"];
      var oidcCertFilePassword = configuration["OIDC:Certificates:Password"];

      if (string.IsNullOrWhiteSpace(oidcCertFileName))
      {
        // You must configure persisted keys for Encryption and Signing.
        // See https://documentation.openiddict.com/configuration/encryption-and-signing-credentials.html
        options.AddEphemeralEncryptionKey()
            .AddEphemeralSigningKey();
      }
      else
      {
        var oidcCertificate = new X509Certificate2(oidcCertFileName, oidcCertFilePassword);
        options.AddEncryptionCertificate(oidcCertificate)
            .AddSigningCertificate(oidcCertificate);
      }
    } 
}

  private static void ConfigureAuthentication(IServiceCollection services)
  {
    services.AddAuthentication(o =>
    {
      o.DefaultScheme = OpenIddictValidationAspNetCoreDefaults.AuthenticationScheme;
      o.DefaultAuthenticateScheme = OpenIddictValidationAspNetCoreDefaults.AuthenticationScheme;
      o.DefaultChallengeScheme = OpenIddictValidationAspNetCoreDefaults.AuthenticationScheme;
    });
  }

  private static void ConfigureAuthorization(IServiceCollection services)
  {
    services.AddAuthorizationBuilder()
        .AddPolicy(AuthPolicies.ViewAllUsersPolicy,
            policy => policy.RequireClaim(CustomClaims.Permission, ApplicationPermissions.ViewUsers))
        .AddPolicy(AuthPolicies.ManageAllUsersPolicy,
            policy => policy.RequireClaim(CustomClaims.Permission, ApplicationPermissions.ManageUsers))
        .AddPolicy(AuthPolicies.ViewAllRolesPolicy,
            policy => policy.RequireClaim(CustomClaims.Permission, ApplicationPermissions.ViewRoles))
        .AddPolicy(AuthPolicies.ViewRoleByRoleNamePolicy,
            policy => policy.Requirements.Add(new ViewRoleAuthorizationRequirement()))
        .AddPolicy(AuthPolicies.ManageAllRolesPolicy,
            policy => policy.RequireClaim(CustomClaims.Permission, ApplicationPermissions.ManageRoles))
        .AddPolicy(AuthPolicies.AssignAllowedRolesPolicy,
            policy => policy.Requirements.Add(new AssignRolesAuthorizationRequirement()));
  }

  #endregion

  #region Redis Caching

  private static void ConfigureRedis(IServiceCollection services, IConfiguration configuration)
  {
    var redisConnectionString = configuration.GetConnectionString("RedisConnection") ??
        throw new ArgumentNullException("Redis connection string cannot be null or empty.");

    services.AddSingleton<ConnectionMultiplexer>(sp =>
        ConnectionMultiplexer.Connect(redisConnectionString));

    services.AddStackExchangeRedisCache(options =>
    {
      options.Configuration = redisConnectionString;
      options.InstanceName = "mssqlInstance:";
    });
  }

  #endregion

  #region CORS

  private static void ConfigureCors(IServiceCollection services)
  {
    services.AddCors(options =>
    {
      options.AddPolicy("AllowOrigin",
          builder => builder.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader());
    });
  }

  #endregion

  #region Controllers & Swagger

  private static void ConfigureControllersAndSwagger(IServiceCollection services)
  {
    services.AddControllers();
    services.AddEndpointsApiExplorer();

    services.AddSwaggerGen(c =>
    {
      c.SwaggerDoc("v1", new OpenApiInfo { Title = OidcServerConfig.ServerName, Version = "v1" });
      c.OperationFilter<SwaggerAuthorizeOperationFilter>();
      c.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
      {
        Type = SecuritySchemeType.OAuth2,
        Flows = new OpenApiOAuthFlows
        {
          Password = new OpenApiOAuthFlow
          {
            TokenUrl = new Uri("/connect/token", UriKind.Relative)
          }
        }
      });
    });

    services.AddAutoMapper(typeof(Program));
  }

  #endregion

  #region Application Services

  private static void ConfigureApplicationServices(IServiceCollection services)
  {
    // Configurations
    services.AddOptions<AppSettings>()
        .BindConfiguration(string.Empty);

    // Business Services
    services.AddScoped<IUserAccountService, UserAccountService>();
    services.AddScoped<IUserRoleService, UserRoleService>();
    services.AddScoped<ICustomerService, CustomerService>();
    services.AddScoped<IProductService, ProductService>();
    services.AddScoped<IOrdersService, OrdersService>();

    // Other Services
    services.AddScoped<IEmailSender, EmailSender>();
    services.AddScoped<IUserIdAccessor, UserIdAccessor>();

    // Auth Handlers
    services.AddSingleton<IAuthorizationHandler, ViewUserAuthorizationHandler>();
    services.AddSingleton<IAuthorizationHandler, ManageUserAuthorizationHandler>();
    services.AddSingleton<IAuthorizationHandler, ViewRoleAuthorizationHandler>();
    services.AddSingleton<IAuthorizationHandler, AssignRolesAuthorizationHandler>();

    // DB Creation and Seeding
    services.AddTransient<IDatabaseSeeder, DatabaseSeeder>();
  }

  #endregion

  #region Repositories

  private static void RegisterRepositories(IServiceCollection services)
  {
    services.AddScoped<IDatabaseReposititory, DatabaseReposititory>();
    services.AddScoped<ILeftMenuRepository, LeftMenuRepository>();
    services.AddScoped<IObjectDependenciesRepository, ObjectDependenciesRepository>();
    services.AddScoped<ITableRepository, TableRepository>();
    services.AddScoped<ITablesRepository, TablesRepository>();
    services.AddScoped<IViewsRepository, ViewsRepository>();

    services.AddScoped<IBaseSqlFunctionRepository, BaseSqlFunctionRepository>();
    services.AddScoped<IScalarFunctionRepository, ScalarFunctionRepository>();
    services.AddScoped<IAggregateFunctionRepository, AggregateFunctionRepository>();
    services.AddScoped<ITableValuedFunctionRepository, TableValuedFunctionRepository>();

    services.AddScoped<IStoredProcedureRepository, StoredProcedureRepository>();
    services.AddScoped<IDatabaseTriggerRepository, DatabaseTriggerRepository>();
    services.AddScoped<IUserDefinedDataTypeRepository, UserDefinedDataTypeRepository>();
    services.AddScoped<IXmlSchemaRepository, XmlSchemaRepository>();
    services.AddScoped<IFullTextCatalogRepository, FullTextCatalogRepository>();
    services.AddScoped<ISchemaRepository, SchemaRepository>();
  }

  #endregion

  #region Logging & Email

  private static void ConfigureLoggingAndEmail(WebApplicationBuilder builder)
  {
    builder.Logging.AddFile(builder.Configuration.GetSection("Logging"));
    EmailTemplates.Initialize(builder.Environment);
  }

  #endregion

  #region Middleware Configuration

  private static void ConfigureMiddleware(WebApplication app)
  {
    app.UseCors("AllowOrigin");
    app.UseHttpsRedirection();
    app.Urls.Add("http://localhost:5000");

    if (!app.Environment.IsDevelopment())
    {
      app.UseHsts();
    }

    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseDefaultFiles();
    app.UseStaticFiles();
    app.UseAuthorization();
    app.MapControllers();
    app.MapFallbackToFile("/index.html");
  }

  private static void ConfigureSwaggerUI(WebApplication app)
  {
    if (app.Environment.IsDevelopment())
    {
      app.UseSwaggerUI(c =>
      {
        c.DocumentTitle = "Swagger UI - MSSQL";
        c.SwaggerEndpoint("/swagger/v1/swagger.json", $"{OidcServerConfig.ServerName} V1");
        c.OAuthClientId(OidcServerConfig.SwaggerClientID);
      });

      IdentityModelEventSource.ShowPII = true;
    }
  }

  #endregion

  #region Database Seeding

  private static async Task SeedDatabase(WebApplication app)
  {
    using var scope = app.Services.CreateScope();
    try
    {
      var dbSeeder = scope.ServiceProvider.GetRequiredService<IDatabaseSeeder>();
      await dbSeeder.SeedAsync();

      await OidcServerConfig.RegisterClientApplicationsAsync(scope.ServiceProvider);
    }
    catch (Exception ex)
    {
      var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
      logger.LogCritical(ex, "An error occurred whilst creating/seeding database");
      throw;
    }
  }

  #endregion
}
