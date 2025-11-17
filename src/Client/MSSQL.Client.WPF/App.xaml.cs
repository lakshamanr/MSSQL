using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MSSQL.Client.WPF.Services;
using MSSQL.Client.WPF.ViewModels;
using MSSQL.Client.WPF.Views;
using System;
using System.IO;
using System.Windows;

namespace MSSQL.Client.WPF
{
    public partial class App : Application
    {
        public IServiceProvider ServiceProvider { get; private set; }
        public IConfiguration Configuration { get; private set; }

        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);

            // Load configuration
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

            Configuration = builder.Build();

            // Configure services
            var serviceCollection = new ServiceCollection();
            ConfigureServices(serviceCollection);

            ServiceProvider = serviceCollection.BuildServiceProvider();

            // Show login window first
            var loginWindow = ServiceProvider.GetRequiredService<LoginWindow>();
            var loginResult = loginWindow.ShowDialog();

            if (loginResult == true && loginWindow.LoginSuccessful)
            {
                // Login successful, show main window
                var mainWindow = ServiceProvider.GetRequiredService<MainWindow>();
                mainWindow.Show();
            }
            else
            {
                // Login failed or cancelled, exit application
                Shutdown();
            }
        }

        private void ConfigureServices(IServiceCollection services)
        {
            // Configuration
            services.AddSingleton(Configuration);

            // HTTP Client
            var apiSettings = Configuration.GetSection("ApiSettings");
            var primaryUrl = apiSettings["PrimaryUrl"] ?? "http://localhost:5000";

            services.AddHttpClient("MSSQLClient", client =>
            {
                client.BaseAddress = new Uri(primaryUrl);
                client.Timeout = TimeSpan.FromSeconds(30);
            });

            // Services
            services.AddSingleton<IAuthenticationService, AuthenticationService>();
            services.AddSingleton<IApiService, ApiService>();
            services.AddSingleton<IDatabaseService, DatabaseService>();
            services.AddSingleton<ITableService, TableService>();
            services.AddSingleton<IViewService, ViewService>();
            services.AddSingleton<IStoredProcedureService, StoredProcedureService>();
            services.AddSingleton<IFunctionService, FunctionService>();
            services.AddSingleton<ISchemaService, SchemaService>();
            services.AddSingleton<ILeftMenuService, LeftMenuService>();
            services.AddSingleton<INavigationService, NavigationService>();

            // ViewModels
            services.AddTransient<LoginViewModel>();
            services.AddTransient<MainViewModel>();
            services.AddTransient<DatabaseSelectorViewModel>();
            services.AddTransient<LeftMenuViewModel>();
            services.AddTransient<TableViewModel>();
            services.AddTransient<TablesViewModel>();
            services.AddTransient<ViewViewModel>();
            services.AddTransient<ViewsViewModel>();
            services.AddTransient<StoredProcedureViewModel>();
            services.AddTransient<StoredProceduresViewModel>();
            services.AddTransient<SchemaViewModel>();
            services.AddTransient<SchemasViewModel>();

            // Views
            services.AddTransient<LoginWindow>();
            services.AddSingleton<MainWindow>();
        }

        protected override void OnExit(ExitEventArgs e)
        {
            if (ServiceProvider is IDisposable disposable)
            {
                disposable.Dispose();
            }
            base.OnExit(e);
        }
    }
}
