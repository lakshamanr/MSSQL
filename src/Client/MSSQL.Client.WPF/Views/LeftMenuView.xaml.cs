using MSSQL.Client.WPF.Models;
using MSSQL.Client.WPF.ViewModels;
using System.Windows.Controls;

namespace MSSQL.Client.WPF.Views
{
    public partial class LeftMenuView : UserControl
    {
        public LeftMenuView()
        {
            InitializeComponent();
        }

        private void TreeView_SelectedItemChanged(object sender, System.Windows.RoutedPropertyChangedEventArgs<object> e)
        {
            if (DataContext is LeftMenuViewModel viewModel && e.NewValue is LeftMenuTreeNode node)
            {
                viewModel.SelectedNode = node;
            }
        }
    }
}
