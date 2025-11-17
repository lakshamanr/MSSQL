using MSSQL.Client.WPF.Infrastructure;
using MSSQL.Client.WPF.Services;
using System.Windows;
using System.Windows.Input;

namespace MSSQL.Client.WPF.ViewModels
{
    public class LoginViewModel : ViewModelBase
    {
        private readonly IAuthenticationService _authenticationService;
        private string _username = string.Empty;
        private string _password = string.Empty;
        private string _errorMessage = string.Empty;
        private bool _isLoading;

        public string Username
        {
            get => _username;
            set
            {
                if (SetProperty(ref _username, value))
                {
                    ErrorMessage = string.Empty;
                }
            }
        }

        public string Password
        {
            get => _password;
            set
            {
                if (SetProperty(ref _password, value))
                {
                    ErrorMessage = string.Empty;
                }
            }
        }

        public string ErrorMessage
        {
            get => _errorMessage;
            set => SetProperty(ref _errorMessage, value);
        }

        public bool IsLoading
        {
            get => _isLoading;
            set => SetProperty(ref _isLoading, value);
        }

        public ICommand LoginCommand { get; }
        public ICommand CancelCommand { get; }

        public event EventHandler<bool>? LoginCompleted;

        public LoginViewModel(IAuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;

            LoginCommand = new AsyncRelayCommand(LoginAsync, CanLogin);
            CancelCommand = new RelayCommand(Cancel);
        }

        private bool CanLogin()
        {
            return !string.IsNullOrWhiteSpace(Username) &&
                   !string.IsNullOrWhiteSpace(Password) &&
                   !IsLoading;
        }

        private async Task LoginAsync()
        {
            IsLoading = true;
            ErrorMessage = string.Empty;

            try
            {
                var result = await _authenticationService.LoginAsync(Username, Password);

                if (result.Success)
                {
                    LoginCompleted?.Invoke(this, true);
                }
                else
                {
                    ErrorMessage = result.Message ?? "Login failed. Please check your credentials.";
                }
            }
            catch (Exception ex)
            {
                ErrorMessage = $"Connection error: {ex.Message}";
            }
            finally
            {
                IsLoading = false;
            }
        }

        private void Cancel()
        {
            LoginCompleted?.Invoke(this, false);
        }
    }
}
