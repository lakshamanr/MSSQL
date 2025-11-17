using MSSQL.Client.WPF.Infrastructure;
using MSSQL.Client.WPF.Models;
using MSSQL.Client.WPF.Services;
using System.Windows.Input;

namespace MSSQL.Client.WPF.ViewModels
{
    public class TableViewModel : ViewModelBase
    {
        private readonly ITableService _tableService;
        private TableMetadata? _tableMetadata;
        private bool _isLoading;
        private string _tableName = string.Empty;
        private int _selectedTabIndex;

        public TableMetadata? TableMetadata
        {
            get => _tableMetadata;
            set => SetProperty(ref _tableMetadata, value);
        }

        public bool IsLoading
        {
            get => _isLoading;
            set => SetProperty(ref _isLoading, value);
        }

        public string TableName
        {
            get => _tableName;
            set
            {
                if (SetProperty(ref _tableName, value))
                {
                    _ = LoadTableMetaDataAsync(value);
                }
            }
        }

        public int SelectedTabIndex
        {
            get => _selectedTabIndex;
            set => SetProperty(ref _selectedTabIndex, value);
        }

        public ICommand LoadTableCommand { get; }
        public ICommand UpdateDescriptionCommand { get; }
        public ICommand UpdateColumnDescriptionCommand { get; }

        public TableViewModel(ITableService tableService)
        {
            _tableService = tableService;

            LoadTableCommand = new AsyncRelayCommand<string>(LoadTableMetaDataAsync!);
            UpdateDescriptionCommand = new AsyncRelayCommand<string>(UpdateTableDescriptionAsync!);
            UpdateColumnDescriptionCommand = new AsyncRelayCommand<object>(UpdateColumnDescriptionAsync!);
        }

        public async Task LoadTableMetaDataAsync(string tableName)
        {
            if (string.IsNullOrEmpty(tableName))
                return;

            IsLoading = true;

            try
            {
                TableMetadata = await _tableService.GetTableMetaDataAsync(tableName);
            }
            catch (Exception ex)
            {
                // Log error
                Console.WriteLine($"Error loading table metadata: {ex.Message}");
            }
            finally
            {
                IsLoading = false;
            }
        }

        private async Task UpdateTableDescriptionAsync(string description)
        {
            if (TableMetadata == null || string.IsNullOrEmpty(TableMetadata.TableName))
                return;

            try
            {
                var success = await _tableService.UpdateTableDescriptionAsync(TableMetadata.TableName, description);
                if (success)
                {
                    await LoadTableMetaDataAsync(TableMetadata.TableName);
                }
            }
            catch (Exception ex)
            {
                // Log error
                Console.WriteLine($"Error updating description: {ex.Message}");
            }
        }

        private async Task UpdateColumnDescriptionAsync(object parameter)
        {
            if (TableMetadata == null || parameter is not Tuple<string, string> tuple)
                return;

            var (columnName, description) = tuple;

            try
            {
                var success = await _tableService.UpdateColumnDescriptionAsync(
                    TableMetadata.TableName!, columnName, description);

                if (success)
                {
                    await LoadTableMetaDataAsync(TableMetadata.TableName!);
                }
            }
            catch (Exception ex)
            {
                // Log error
                Console.WriteLine($"Error updating column description: {ex.Message}");
            }
        }
    }
}
