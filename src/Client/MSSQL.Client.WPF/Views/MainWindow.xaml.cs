using MSSQL.Client.WPF.ViewModels;
using System.Windows;

namespace MSSQL.Client.WPF.Views
{
    public partial class MainWindow : Window
    {
        private readonly MainViewModel _viewModel;

        public MainWindow(MainViewModel viewModel)
        {
            InitializeComponent();
            _viewModel = viewModel;
            DataContext = _viewModel;

            _viewModel.LogoutRequested += OnLogoutRequested;
        }

        private void OnLogoutRequested(object? sender, System.EventArgs e)
        {
            // Close main window, which will trigger application shutdown or return to login
            this.Close();
            Application.Current.Shutdown();
        }

        protected override void OnClosed(System.EventArgs e)
        {
            _viewModel.LogoutRequested -= OnLogoutRequested;
            base.OnClosed(e);
        }
    }
}
