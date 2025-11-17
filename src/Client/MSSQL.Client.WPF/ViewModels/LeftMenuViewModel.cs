using MSSQL.Client.WPF.Infrastructure;
using MSSQL.Client.WPF.Models;
using MSSQL.Client.WPF.Services;
using System.Collections.ObjectModel;
using System.Windows.Input;

namespace MSSQL.Client.WPF.ViewModels
{
    public class LeftMenuViewModel : ViewModelBase
    {
        private readonly ILeftMenuService _leftMenuService;
        private readonly INavigationService _navigationService;
        private ObservableCollection<LeftMenuTreeNode> _treeNodes = new();
        private LeftMenuTreeNode? _selectedNode;
        private bool _isLoading;

        public ObservableCollection<LeftMenuTreeNode> TreeNodes
        {
            get => _treeNodes;
            set => SetProperty(ref _treeNodes, value);
        }

        public LeftMenuTreeNode? SelectedNode
        {
            get => _selectedNode;
            set
            {
                if (SetProperty(ref _selectedNode, value) && value != null && value.IsLeaf)
                {
                    OnNodeSelected(value);
                }
            }
        }

        public bool IsLoading
        {
            get => _isLoading;
            set => SetProperty(ref _isLoading, value);
        }

        public ICommand LoadMenuCommand { get; }
        public ICommand NodeSelectedCommand { get; }

        public LeftMenuViewModel(ILeftMenuService leftMenuService, INavigationService navigationService)
        {
            _leftMenuService = leftMenuService;
            _navigationService = navigationService;

            LoadMenuCommand = new AsyncRelayCommand(LoadLeftMenuDataAsync);
            NodeSelectedCommand = new RelayCommand<LeftMenuTreeNode>(OnNodeSelected!);

            _ = LoadLeftMenuDataAsync();
        }

        public async Task LoadLeftMenuDataAsync()
        {
            IsLoading = true;

            try
            {
                var menuData = await _leftMenuService.GetLeftMenuDataAsync();
                if (menuData?.Nodes != null)
                {
                    TreeNodes = menuData.Nodes;
                }
            }
            catch (Exception ex)
            {
                // Log error
                Console.WriteLine($"Error loading left menu: {ex.Message}");
            }
            finally
            {
                IsLoading = false;
            }
        }

        private void OnNodeSelected(LeftMenuTreeNode node)
        {
            if (node.IsLeaf && !string.IsNullOrEmpty(node.Type) && !string.IsNullOrEmpty(node.ObjectName))
            {
                _navigationService.NavigateTo(node.Type, node.ObjectName);
            }
        }
    }
}
