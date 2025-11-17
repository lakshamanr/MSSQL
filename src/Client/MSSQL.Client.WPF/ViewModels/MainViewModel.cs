using MSSQL.Client.WPF.Infrastructure;
using MSSQL.Client.WPF.Services;
using System.Windows.Input;

namespace MSSQL.Client.WPF.ViewModels
{
    public class MainViewModel : ViewModelBase
    {
        private readonly INavigationService _navigationService;
        private ViewModelBase? _currentContentViewModel;
        private string _statusMessage = "Ready";
        private bool _isLoading;

        public DatabaseSelectorViewModel DatabaseSelectorViewModel { get; }
        public LeftMenuViewModel LeftMenuViewModel { get; }

        public ViewModelBase? CurrentContentViewModel
        {
            get => _currentContentViewModel;
            set => SetProperty(ref _currentContentViewModel, value);
        }

        public string StatusMessage
        {
            get => _statusMessage;
            set => SetProperty(ref _statusMessage, value);
        }

        public bool IsLoading
        {
            get => _isLoading;
            set => SetProperty(ref _isLoading, value);
        }

        public ICommand RefreshCommand { get; }

        public MainViewModel(
            DatabaseSelectorViewModel databaseSelectorViewModel,
            LeftMenuViewModel leftMenuViewModel,
            INavigationService navigationService)
        {
            DatabaseSelectorViewModel = databaseSelectorViewModel;
            LeftMenuViewModel = leftMenuViewModel;
            _navigationService = navigationService;

            RefreshCommand = new AsyncRelayCommand(RefreshAsync);

            // Subscribe to navigation events
            _navigationService.NavigationRequested += OnNavigationRequested;

            // Subscribe to database change events
            DatabaseSelectorViewModel.DatabaseChanged += OnDatabaseChanged;
        }

        private async void OnDatabaseChanged(object? sender, EventArgs e)
        {
            await LeftMenuViewModel.LoadLeftMenuDataAsync();
            StatusMessage = $"Database changed to: {DatabaseSelectorViewModel.SelectedDatabase?.DatabaseName}";
        }

        private void OnNavigationRequested(object? sender, NavigationEventArgs e)
        {
            // Handle navigation to different views based on object type
            StatusMessage = $"Loading {e.ObjectType}: {e.ObjectName}";
            // This will be implemented when we create the specific view models
        }

        private async Task RefreshAsync()
        {
            IsLoading = true;
            StatusMessage = "Refreshing...";

            try
            {
                await DatabaseSelectorViewModel.LoadDatabasesAsync();
                await LeftMenuViewModel.LoadLeftMenuDataAsync();
                StatusMessage = "Refresh completed";
            }
            catch (Exception ex)
            {
                StatusMessage = $"Error: {ex.Message}";
            }
            finally
            {
                IsLoading = false;
            }
        }
    }
}
