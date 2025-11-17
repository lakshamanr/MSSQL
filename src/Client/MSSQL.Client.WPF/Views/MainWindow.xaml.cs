using MSSQL.Client.WPF.ViewModels;
using System.Windows;

namespace MSSQL.Client.WPF.Views
{
    public partial class MainWindow : Window
    {
        public MainWindow(MainViewModel viewModel)
        {
            InitializeComponent();
            DataContext = viewModel;
        }
    }
}
