using MSSQL.Client.WPF.ViewModels;
using System.Windows;
using System.Windows.Controls;

namespace MSSQL.Client.WPF.Views
{
    public partial class LoginWindow : Window
    {
        private readonly LoginViewModel _viewModel;

        public bool LoginSuccessful { get; private set; }

        public LoginWindow(LoginViewModel viewModel)
        {
            InitializeComponent();
            _viewModel = viewModel;
            DataContext = _viewModel;

            _viewModel.LoginCompleted += OnLoginCompleted;
        }

        private void OnLoginCompleted(object? sender, bool success)
        {
            LoginSuccessful = success;
            this.DialogResult = success;
            this.Close();
        }

        private void PasswordBox_PasswordChanged(object sender, RoutedEventArgs e)
        {
            if (sender is PasswordBox passwordBox)
            {
                _viewModel.Password = passwordBox.Password;
            }
        }

        protected override void OnClosed(EventArgs e)
        {
            _viewModel.LoginCompleted -= OnLoginCompleted;
            base.OnClosed(e);
        }
    }
}
