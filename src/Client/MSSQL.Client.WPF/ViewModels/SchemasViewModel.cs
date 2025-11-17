using MSSQL.Client.WPF.Infrastructure;
using MSSQL.Client.WPF.Models;
using MSSQL.Client.WPF.Services;
using System.Collections.ObjectModel;
using System.Windows.Input;

namespace MSSQL.Client.WPF.ViewModels
{
    public class SchemasViewModel : ViewModelBase
    {
        private readonly ISchemaService _schemaService;
        private readonly INavigationService _navigationService;
        private ObservableCollection<SchemaInfo> _schemas = new();
        private SchemaInfo? _selectedSchema;
        private bool _isLoading;

        public ObservableCollection<SchemaInfo> Schemas
        {
            get => _schemas;
            set => SetProperty(ref _schemas, value);
        }

        public SchemaInfo? SelectedSchema
        {
            get => _selectedSchema;
            set
            {
                if (SetProperty(ref _selectedSchema, value) && value != null)
                {
                    _navigationService.NavigateTo("Schema", value.SchemaName!);
                }
            }
        }

        public bool IsLoading
        {
            get => _isLoading;
            set => SetProperty(ref _isLoading, value);
        }

        public ICommand LoadSchemasCommand { get; }

        public SchemasViewModel(ISchemaService schemaService, INavigationService navigationService)
        {
            _schemaService = schemaService;
            _navigationService = navigationService;

            LoadSchemasCommand = new AsyncRelayCommand(LoadSchemasAsync);

            _ = LoadSchemasAsync();
        }

        private async Task LoadSchemasAsync()
        {
            IsLoading = true;

            try
            {
                var schemas = await _schemaService.GetAllSchemasAsync();
                if (schemas != null)
                {
                    Schemas = new ObservableCollection<SchemaInfo>(schemas);
                }
            }
            catch (Exception ex)
            {
                // Log error
                Console.WriteLine($"Error loading schemas: {ex.Message}");
            }
            finally
            {
                IsLoading = false;
            }
        }
    }
}
