namespace MSSQL.Client.WPF.Services
{
    public interface IApiService
    {
        Task<T?> GetAsync<T>(string endpoint);
        Task<T?> PostAsync<T>(string endpoint, object? data = null);
        Task<bool> PostAsync(string endpoint, object? data = null);
    }
}
