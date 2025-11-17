using MSSQL.Client.WPF.Models;
using Newtonsoft.Json;
using System.Net.Http;
using System.Text;

namespace MSSQL.Client.WPF.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private UserSession? _currentSession;

        public bool IsAuthenticated => _currentSession != null;
        public UserSession? CurrentSession => _currentSession;

        public AuthenticationService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<LoginResponse> LoginAsync(string username, string password)
        {
            try
            {
                var client = _httpClientFactory.CreateClient("MSSQLClient");

                var loginRequest = new LoginRequest
                {
                    Username = username,
                    Password = password
                };

                var json = JsonConvert.SerializeObject(loginRequest);
                var content = new StringContent(json, Encoding.UTF8, "application/json");

                var response = await client.PostAsync("/Auth/login", content);
                var responseContent = await response.Content.ReadAsStringAsync();

                if (response.IsSuccessStatusCode)
                {
                    var loginResponse = JsonConvert.DeserializeObject<LoginResponse>(responseContent);

                    if (loginResponse?.Success == true)
                    {
                        _currentSession = new UserSession
                        {
                            Username = loginResponse.Username ?? username,
                            Token = loginResponse.Token,
                            LoginTime = DateTime.Now
                        };
                    }

                    return loginResponse ?? new LoginResponse { Success = false, Message = "Invalid response from server" };
                }
                else
                {
                    return new LoginResponse
                    {
                        Success = false,
                        Message = $"Login failed: {response.StatusCode}"
                    };
                }
            }
            catch (Exception ex)
            {
                return new LoginResponse
                {
                    Success = false,
                    Message = $"Error: {ex.Message}"
                };
            }
        }

        public void Logout()
        {
            _currentSession = null;
        }

        public string? GetAuthToken()
        {
            return _currentSession?.Token;
        }
    }
}
