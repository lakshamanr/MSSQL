using MSSQL.Client.WPF.Infrastructure;
using MSSQL.Client.WPF.Models;
using MSSQL.Client.WPF.Services;
using System.Collections.ObjectModel;
using System.Windows.Input;

namespace MSSQL.Client.WPF.ViewModels
{
    public class TablesViewModel : ViewModelBase
    {
        private readonly ITableService _tableService;
        private readonly INavigationService _navigationService;
        private ObservableCollection<TableMetadata> _tables = new();
        private TableMetadata? _selectedTable;
        private bool _isLoading;
        private string _searchText = string.Empty;

        public ObservableCollection<TableMetadata> Tables
        {
            get => _tables;
            set => SetProperty(ref _tables, value);
        }

        public TableMetadata? SelectedTable
        {
            get => _selectedTable;
            set
            {
                if (SetProperty(ref _selectedTable, value) && value != null)
                {
                    _navigationService.NavigateTo("Table", value.TableName!);
                }
            }
        }

        public bool IsLoading
        {
            get => _isLoading;
            set => SetProperty(ref _isLoading, value);
        }

        public string SearchText
        {
            get => _searchText;
            set
            {
                if (SetProperty(ref _searchText, value))
                {
                    FilterTables();
                }
            }
        }

        public ICommand LoadTablesCommand { get; }
        public ICommand RefreshCommand { get; }

        public TablesViewModel(ITableService tableService, INavigationService navigationService)
        {
            _tableService = tableService;
            _navigationService = navigationService;

            LoadTablesCommand = new AsyncRelayCommand(LoadTablesAsync);
            RefreshCommand = new AsyncRelayCommand(LoadTablesAsync);

            _ = LoadTablesAsync();
        }

        private async Task LoadTablesAsync()
        {
            IsLoading = true;

            try
            {
                var tables = await _tableService.GetAllTablesAsync();
                if (tables != null)
                {
                    Tables = new ObservableCollection<TableMetadata>(tables);
                }
            }
            catch (Exception ex)
            {
                // Log error
                Console.WriteLine($"Error loading tables: {ex.Message}");
            }
            finally
            {
                IsLoading = false;
            }
        }

        private void FilterTables()
        {
            // Implement filtering logic if needed
            // For now, reload all tables
        }
    }
}
