using MSSQL.Client.WPF.Infrastructure;
using MSSQL.Client.WPF.Models;
using MSSQL.Client.WPF.Services;
using System;
using System.Collections.ObjectModel;
using System.Threading.Tasks;
using System.Windows.Input;

namespace MSSQL.Client.WPF.ViewModels
{
    public class DatabaseSelectorViewModel : ViewModelBase
    {
        private readonly IDatabaseService _databaseService;
        private ObservableCollection<DatabaseInfo> _databases = new();
        private DatabaseInfo? _selectedDatabase;
        private DatabaseMetaData? _databaseMetaData;
        private bool _isLoading;

        public event EventHandler? DatabaseChanged;

        public ObservableCollection<DatabaseInfo> Databases
        {
            get => _databases;
            set => SetProperty(ref _databases, value);
        }

        public DatabaseInfo? SelectedDatabase
        {
            get => _selectedDatabase;
            set
            {
                if (SetProperty(ref _selectedDatabase, value) && value != null)
                {
                    _ = ChangeDatabaseAsync(value.DatabaseName!);
                }
            }
        }

        public DatabaseMetaData? DatabaseMetaData
        {
            get => _databaseMetaData;
            set => SetProperty(ref _databaseMetaData, value);
        }

        public bool IsLoading
        {
            get => _isLoading;
            set => SetProperty(ref _isLoading, value);
        }

        public ICommand LoadDatabasesCommand { get; }
        public ICommand RefreshMetaDataCommand { get; }

        public DatabaseSelectorViewModel(IDatabaseService databaseService)
        {
            _databaseService = databaseService;

            LoadDatabasesCommand = new AsyncRelayCommand(LoadDatabasesAsync);
            RefreshMetaDataCommand = new AsyncRelayCommand(LoadMetaDataAsync);

            _ = LoadDatabasesAsync();
        }

        public async Task LoadDatabasesAsync()
        {
            IsLoading = true;

            try
            {
                var databases = await _databaseService.GetDatabasesAsync();
                if (databases != null)
                {
                    Databases = new ObservableCollection<DatabaseInfo>(databases);
                    if (Databases.Count > 0 && SelectedDatabase == null)
                    {
                        SelectedDatabase = Databases[0];
                    }
                }

                await LoadMetaDataAsync();
            }
            catch (Exception ex)
            {
                // Log error
                Console.WriteLine($"Error loading databases: {ex.Message}");
            }
            finally
            {
                IsLoading = false;
            }
        }

        public async Task LoadMetaDataAsync()
        {
            try
            {
                DatabaseMetaData = await _databaseService.GetDatabaseMetaDataAsync();
            }
            catch (Exception ex)
            {
                // Log error
                Console.WriteLine($"Error loading metadata: {ex.Message}");
            }
        }

        private async Task ChangeDatabaseAsync(string databaseName)
        {
            IsLoading = true;

            try
            {
                var success = await _databaseService.ChangeDatabaseAsync(databaseName);
                if (success)
                {
                    await LoadMetaDataAsync();
                    DatabaseChanged?.Invoke(this, EventArgs.Empty);
                }
            }
            catch (Exception ex)
            {
                // Log error
                Console.WriteLine($"Error changing database: {ex.Message}");
            }
            finally
            {
                IsLoading = false;
            }
        }
    }
}
