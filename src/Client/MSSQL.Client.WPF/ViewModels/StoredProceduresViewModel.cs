using MSSQL.Client.WPF.Infrastructure;
using MSSQL.Client.WPF.Models;
using MSSQL.Client.WPF.Services;
using System;
using System.Collections.ObjectModel;
using System.Threading.Tasks;
using System.Windows.Input;

namespace MSSQL.Client.WPF.ViewModels
{
    public class StoredProceduresViewModel : ViewModelBase
    {
        private readonly IStoredProcedureService _storedProcedureService;
        private readonly INavigationService _navigationService;
        private ObservableCollection<StoredProcedureMetadata> _storedProcedures = new();
        private StoredProcedureMetadata? _selectedStoredProcedure;
        private bool _isLoading;

        public ObservableCollection<StoredProcedureMetadata> StoredProcedures
        {
            get => _storedProcedures;
            set => SetProperty(ref _storedProcedures, value);
        }

        public StoredProcedureMetadata? SelectedStoredProcedure
        {
            get => _selectedStoredProcedure;
            set
            {
                if (SetProperty(ref _selectedStoredProcedure, value) && value != null)
                {
                    _navigationService.NavigateTo("StoredProcedure", value.ProcedureName!);
                }
            }
        }

        public bool IsLoading
        {
            get => _isLoading;
            set => SetProperty(ref _isLoading, value);
        }

        public ICommand LoadStoredProceduresCommand { get; }

        public StoredProceduresViewModel(IStoredProcedureService storedProcedureService, INavigationService navigationService)
        {
            _storedProcedureService = storedProcedureService;
            _navigationService = navigationService;

            LoadStoredProceduresCommand = new AsyncRelayCommand(LoadStoredProceduresAsync);

            _ = LoadStoredProceduresAsync();
        }

        private async Task LoadStoredProceduresAsync()
        {
            IsLoading = true;

            try
            {
                var storedProcedures = await _storedProcedureService.GetAllStoredProceduresAsync();
                if (storedProcedures != null)
                {
                    StoredProcedures = new ObservableCollection<StoredProcedureMetadata>(storedProcedures);
                }
            }
            catch (Exception ex)
            {
                // Log error
                Console.WriteLine($"Error loading stored procedures: {ex.Message}");
            }
            finally
            {
                IsLoading = false;
            }
        }
    }
}
