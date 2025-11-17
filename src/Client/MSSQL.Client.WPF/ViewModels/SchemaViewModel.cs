using MSSQL.Client.WPF.Infrastructure;
using MSSQL.Client.WPF.Models;
using MSSQL.Client.WPF.Services;
using System;
using System.Threading.Tasks;
using System.Windows.Input;

namespace MSSQL.Client.WPF.ViewModels
{
    public class SchemaViewModel : ViewModelBase
    {
        private readonly ISchemaService _schemaService;
        private SchemaInfo? _schemaInfo;
        private bool _isLoading;
        private string _schemaName = string.Empty;

        public SchemaInfo? SchemaInfo
        {
            get => _schemaInfo;
            set => SetProperty(ref _schemaInfo, value);
        }

        public bool IsLoading
        {
            get => _isLoading;
            set => SetProperty(ref _isLoading, value);
        }

        public string SchemaName
        {
            get => _schemaName;
            set
            {
                if (SetProperty(ref _schemaName, value))
                {
                    _ = LoadSchemaMetaDataAsync(value);
                }
            }
        }

        public ICommand LoadSchemaCommand { get; }

        public SchemaViewModel(ISchemaService schemaService)
        {
            _schemaService = schemaService;
            LoadSchemaCommand = new AsyncRelayCommand<string>(LoadSchemaMetaDataAsync!);
        }

        private async Task LoadSchemaMetaDataAsync(string schemaName)
        {
            if (string.IsNullOrEmpty(schemaName))
                return;

            IsLoading = true;

            try
            {
                SchemaInfo = await _schemaService.GetSchemaMetaDataAsync(schemaName);
            }
            catch (Exception ex)
            {
                // Log error
                Console.WriteLine($"Error loading schema metadata: {ex.Message}");
            }
            finally
            {
                IsLoading = false;
            }
        }
    }
}
