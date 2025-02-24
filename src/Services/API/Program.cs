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

        

        RegisterRepositories(builder.Services);

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
