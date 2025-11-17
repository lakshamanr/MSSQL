using MSSQL.Client.WPF.Infrastructure;
using MSSQL.Client.WPF.Models;
using MSSQL.Client.WPF.Services;
using System;
using System.Threading.Tasks;
using System.Windows.Input;

namespace MSSQL.Client.WPF.ViewModels
{
    public class ViewViewModel : ViewModelBase
    {
        private readonly IViewService _viewService;
        private ViewMetadata? _viewMetadata;
        private bool _isLoading;
        private string _viewName = string.Empty;

        public ViewMetadata? ViewMetadata
        {
            get => _viewMetadata;
            set => SetProperty(ref _viewMetadata, value);
        }

        public bool IsLoading
        {
            get => _isLoading;
            set => SetProperty(ref _isLoading, value);
        }

        public string ViewName
        {
            get => _viewName;
            set
            {
                if (SetProperty(ref _viewName, value))
                {
                    _ = LoadViewMetaDataAsync(value);
                }
            }
        }

        public ICommand LoadViewCommand { get; }

        public ViewViewModel(IViewService viewService)
        {
            _viewService = viewService;
            LoadViewCommand = new AsyncRelayCommand<string>(LoadViewMetaDataAsync!);
        }

        private async Task LoadViewMetaDataAsync(string viewName)
        {
            if (string.IsNullOrEmpty(viewName))
                return;

            IsLoading = true;

            try
            {
                ViewMetadata = await _viewService.GetViewMetaDataAsync(viewName);
            }
            catch (Exception ex)
            {
                // Log error
                Console.WriteLine($"Error loading view metadata: {ex.Message}");
            }
            finally
            {
                IsLoading = false;
            }
        }
    }
}
