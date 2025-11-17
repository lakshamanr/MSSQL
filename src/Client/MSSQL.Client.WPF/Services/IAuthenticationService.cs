using MSSQL.Client.WPF.Models;

namespace MSSQL.Client.WPF.Services
{
    public interface IAuthenticationService
    {
        Task<LoginResponse> LoginAsync(string username, string password);
        void Logout();
        bool IsAuthenticated { get; }
        UserSession? CurrentSession { get; }
        string? GetAuthToken();
    }
}
