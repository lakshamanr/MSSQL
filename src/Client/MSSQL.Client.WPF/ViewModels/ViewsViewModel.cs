using MSSQL.Client.WPF.Infrastructure;
using MSSQL.Client.WPF.Models;
using MSSQL.Client.WPF.Services;
using System.Collections.ObjectModel;
using System.Windows.Input;

namespace MSSQL.Client.WPF.ViewModels
{
    public class ViewsViewModel : ViewModelBase
    {
        private readonly IViewService _viewService;
        private readonly INavigationService _navigationService;
        private ObservableCollection<ViewMetadata> _views = new();
        private ViewMetadata? _selectedView;
        private bool _isLoading;

        public ObservableCollection<ViewMetadata> Views
        {
            get => _views;
            set => SetProperty(ref _views, value);
        }

        public ViewMetadata? SelectedView
        {
            get => _selectedView;
            set
            {
                if (SetProperty(ref _selectedView, value) && value != null)
                {
                    _navigationService.NavigateTo("View", value.ViewName!);
                }
            }
        }

        public bool IsLoading
        {
            get => _isLoading;
            set => SetProperty(ref _isLoading, value);
        }

        public ICommand LoadViewsCommand { get; }

        public ViewsViewModel(IViewService viewService, INavigationService navigationService)
        {
            _viewService = viewService;
            _navigationService = navigationService;

            LoadViewsCommand = new AsyncRelayCommand(LoadViewsAsync);

            _ = LoadViewsAsync();
        }

        private async Task LoadViewsAsync()
        {
            IsLoading = true;

            try
            {
                var views = await _viewService.GetAllViewsAsync();
                if (views != null)
                {
                    Views = new ObservableCollection<ViewMetadata>(views);
                }
            }
            catch (Exception ex)
            {
                // Log error
                Console.WriteLine($"Error loading views: {ex.Message}");
            }
            finally
            {
                IsLoading = false;
            }
        }
    }
}
