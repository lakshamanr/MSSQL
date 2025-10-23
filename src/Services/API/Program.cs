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

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Configuration.Sources.Clear();

        builder.Configuration
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables()
                .AddCommandLine(args);

     var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ??
              throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");

    var migrationsAssembly = typeof(Program).GetTypeInfo().Assembly.GetName().Name;

    builder.Services.AddDbContext<ApplicationDbContext>(options =>
    {
      options.UseSqlServer(connectionString, b => b.MigrationsAssembly(migrationsAssembly));
      options.UseOpenIddict();
    });

    // Add Identity
    builder.Services.AddIdentity<ApplicationUser, ApplicationRole>()
        .AddEntityFrameworkStores<ApplicationDbContext>()
        .AddDefaultTokenProviders();

    builder.Services.Configure<IdentityOptions>(options =>
    {
      // User settings
      options.User.RequireUniqueEmail = true;

      // Password settings
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

    // Configure OpenIddict periodic pruning of orphaned authorizations/tokens from the database.
    builder.Services.AddQuartz(options =>
    {
      options.UseSimpleTypeLoader();
      options.UseInMemoryStore();
    });

    // Register the Quartz.NET service and configure it to block shutdown until jobs are complete.
    builder.Services.AddQuartzHostedService(options => options.WaitForJobsToComplete = true);

    builder.Services.AddOpenIddict()
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

          if (builder.Environment.IsDevelopment())
          {
            options.AddDevelopmentEncryptionCertificate()
               .AddDevelopmentSigningCertificate();
          }
          else
          {
            var oidcCertFileName = builder.Configuration["OIDC:Certificates:Path"];
            var oidcCertFilePassword = builder.Configuration["OIDC:Certificates:Password"];

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

          options.UseAspNetCore()
             .EnableTokenEndpointPassthrough();
        })
        .AddValidation(options =>
        {
          options.UseLocalServer();
          options.UseAspNetCore();
        });

    builder.Services.AddAuthentication(o =>
    {
      o.DefaultScheme = OpenIddictValidationAspNetCoreDefaults.AuthenticationScheme;
      o.DefaultAuthenticateScheme = OpenIddictValidationAspNetCoreDefaults.AuthenticationScheme;
      o.DefaultChallengeScheme = OpenIddictValidationAspNetCoreDefaults.AuthenticationScheme;
    });

    builder.Services.AddAuthorizationBuilder()
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

    // Add cors
    builder.Services.AddCors();

    builder.Services.AddControllers();

    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    builder.Services.AddEndpointsApiExplorer();

    builder.Services.AddSwaggerGen(c =>
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

    builder.Services.AddAutoMapper(typeof(Program));

    // Configurations
    builder.Services.Configure<AppSettings>(builder.Configuration);

    // Business Services
    builder.Services.AddScoped<IUserAccountService, UserAccountService>();
    builder.Services.AddScoped<IUserRoleService, UserRoleService>();
    builder.Services.AddScoped<ICustomerService, CustomerService>();
    builder.Services.AddScoped<IProductService, ProductService>();
    builder.Services.AddScoped<IOrdersService, OrdersService>();

    // Other Services
    builder.Services.AddScoped<IEmailSender, EmailSender>();
    builder.Services.AddScoped<IUserIdAccessor, UserIdAccessor>();

    // Auth Handlers
    builder.Services.AddSingleton<IAuthorizationHandler, ViewUserAuthorizationHandler>();
    builder.Services.AddSingleton<IAuthorizationHandler, ManageUserAuthorizationHandler>();
    builder.Services.AddSingleton<IAuthorizationHandler, ViewRoleAuthorizationHandler>();
    builder.Services.AddSingleton<IAuthorizationHandler, AssignRolesAuthorizationHandler>();

    // DB Creation and Seeding
    builder.Services.AddTransient<IDatabaseSeeder, DatabaseSeeder>();

    RegisterRepositories(builder.Services);

    //File Logger
    builder.Logging.AddFile(builder.Configuration.GetSection("Logging"));

    //Email Templates
    EmailTemplates.Initialize(builder.Environment);


    var redisConnectionString = builder.Configuration.GetConnectionString("RedisConnection");

    if (string.IsNullOrEmpty(redisConnectionString))
    {
      throw new ArgumentNullException("Redis connection string cannot be null or empty.");
    }

    // Register StackExchange.Redis ConnectionMultiplexer
    builder.Services.AddSingleton<ConnectionMultiplexer>(sp =>
    {
      return ConnectionMultiplexer.Connect(redisConnectionString);
    });

    
    builder.Services.AddStackExchangeRedisCache(options =>
        {
            options.Configuration = redisConnectionString;
            options.InstanceName = "mssqlInstance:";
        });

        

        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowOrigin",
                        //builder => builder.WithOrigins("http://localhost:4200")
                        builder => builder.AllowAnyOrigin()
                                     .AllowAnyMethod()
                                     .AllowAnyHeader());
        });

        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        var app = builder.Build();

        app.UseCors("AllowOrigin");

    app.Urls.Add("http://localhost:5000");
    app.UseSwagger();
    app.UseSwaggerUI();

    app.UseAuthorization();
    app.MapControllers();
    app.Run();
    }

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
}
