using MSSQL.Client.WPF.Infrastructure;
using MSSQL.Client.WPF.Models;
using MSSQL.Client.WPF.Services;
using System;
using System.Threading.Tasks;
using System.Windows.Input;

namespace MSSQL.Client.WPF.ViewModels
{
    public class StoredProcedureViewModel : ViewModelBase
    {
        private readonly IStoredProcedureService _storedProcedureService;
        private StoredProcedureMetadata? _storedProcedureMetadata;
        private bool _isLoading;
        private string _procedureName = string.Empty;

        public StoredProcedureMetadata? StoredProcedureMetadata
        {
            get => _storedProcedureMetadata;
            set => SetProperty(ref _storedProcedureMetadata, value);
        }

        public bool IsLoading
        {
            get => _isLoading;
            set => SetProperty(ref _isLoading, value);
        }

        public string ProcedureName
        {
            get => _procedureName;
            set
            {
                if (SetProperty(ref _procedureName, value))
                {
                    _ = LoadStoredProcedureMetaDataAsync(value);
                }
            }
        }

        public ICommand LoadStoredProcedureCommand { get; }

        public StoredProcedureViewModel(IStoredProcedureService storedProcedureService)
        {
            _storedProcedureService = storedProcedureService;
            LoadStoredProcedureCommand = new AsyncRelayCommand<string>(LoadStoredProcedureMetaDataAsync!);
        }

        private async Task LoadStoredProcedureMetaDataAsync(string procedureName)
        {
            if (string.IsNullOrEmpty(procedureName))
                return;

            IsLoading = true;

            try
            {
                StoredProcedureMetadata = await _storedProcedureService.GetStoredProcedureMetaDataAsync(procedureName);
            }
            catch (Exception ex)
            {
                // Log error
                Console.WriteLine($"Error loading stored procedure metadata: {ex.Message}");
            }
            finally
            {
                IsLoading = false;
            }
        }
    }
}
