using API.Repository.Database;
using API.Repository.Functions;
using API.Repository.LeftMenu;
using API.Repository.StoreProcedure;
using API.Repository.Table;
using API.Repository.View;
using Microsoft.Extensions.Caching.Distributed;

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

        var redisConnectionString = builder.Configuration.GetConnectionString("RedisConnection");

        if (string.IsNullOrEmpty(redisConnectionString))
        {
            throw new ArgumentNullException("Redis connection string cannot be null or empty.");
        }

        builder.Services.AddStackExchangeRedisCache(options =>
        {
            options.Configuration = redisConnectionString;
            options.InstanceName = "mssqlInstance:";
        });

        var connectionString = builder.Configuration.GetConnectionString("SqlServerConnection");

        if (string.IsNullOrEmpty(connectionString))
        {
            throw new ArgumentNullException("SQL Server connection string cannot be null or empty.");
        }

        RegisterRepositories(builder.Services, connectionString);

        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowOrigin",
                   builder => builder.WithOrigins("http://localhost:4200")
                                     .AllowAnyMethod()
                                     .AllowAnyHeader());
        });

        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        var app = builder.Build();

        app.UseCors("AllowAllOrigins");

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseAuthorization();
        app.MapControllers();
        app.Run();
    }

    private static void RegisterRepositories(IServiceCollection services, string connectionString)
    {
        services.AddScoped(provider =>
        {
            var logger = provider.GetRequiredService<ILogger<DatabaseReposititory>>();
            var cache = provider.GetRequiredService<IDistributedCache>();
            return new DatabaseReposititory(connectionString, logger, cache);
        });

        services.AddScoped(provider =>
        {
            var logger = provider.GetRequiredService<ILogger<LeftMenuRepository>>();
            var cache = provider.GetRequiredService<IDistributedCache>();
            return new LeftMenuRepository(connectionString, logger, cache);
        });

        services.AddScoped(provider =>
        {
            var logger = provider.GetRequiredService<ILogger<TableRepository>>();
            var cache = provider.GetRequiredService<IDistributedCache>();
            return new TableRepository(connectionString, logger, cache);
        });

        services.AddScoped(provider =>
        {
            var logger = provider.GetRequiredService<ILogger<TablesRepository>>();
            var cache = provider.GetRequiredService<IDistributedCache>();
            return new TablesRepository(connectionString, cache);
        });

        services.AddScoped(provider =>
        {
            var logger = provider.GetRequiredService<ILogger<ViewsRepository>>();
            var cache = provider.GetRequiredService<IDistributedCache>();
            return new ViewsRepository(connectionString, logger, cache);
        });

        services.AddScoped(provider =>
        {
            var logger = provider.GetRequiredService<ILogger<ScalarFunctionRepository>>();
            var cache = provider.GetRequiredService<IDistributedCache>();
            return new ScalarFunctionRepository(connectionString);
        });

        services.AddScoped(provider =>
        {
            var logger = provider.GetRequiredService<ILogger<TableValuedFunctionRepository>>();
            var cache = provider.GetRequiredService<IDistributedCache>();
            return new TableValuedFunctionRepository(connectionString);
        });

        services.AddScoped(provider =>
        {
            var logger = provider.GetRequiredService<ILogger<StoredProcedureRepository>>();
            var cache = provider.GetRequiredService<IDistributedCache>();
            return new StoredProcedureRepository(connectionString);
        });
        

    }
}
