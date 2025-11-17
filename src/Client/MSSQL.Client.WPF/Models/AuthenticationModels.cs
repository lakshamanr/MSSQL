namespace MSSQL.Client.WPF.Models
{
    public class LoginRequest
    {
        public string? Username { get; set; }
        public string? Password { get; set; }
    }

    public class LoginResponse
    {
        public bool Success { get; set; }
        public string? Token { get; set; }
        public string? Message { get; set; }
        public string? Username { get; set; }
    }

    public class UserSession
    {
        public string? Username { get; set; }
        public string? Token { get; set; }
        public DateTime LoginTime { get; set; }
    }
}
