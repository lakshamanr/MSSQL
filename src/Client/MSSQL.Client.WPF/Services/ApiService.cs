using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace MSSQL.Client.WPF.Services
{
    public class ApiService : IApiService
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public ApiService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<T?> GetAsync<T>(string endpoint)
        {
            try
            {
                var client = _httpClientFactory.CreateClient("MSSQLClient");
                var response = await client.GetAsync(endpoint);
                response.EnsureSuccessStatusCode();

                var content = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<T>(content);
            }
            catch (Exception ex)
            {
                // Log error
                Console.WriteLine($"API GET Error: {ex.Message}");
                throw;
            }
        }

        public async Task<T?> PostAsync<T>(string endpoint, object? data = null)
        {
            try
            {
                var client = _httpClientFactory.CreateClient("MSSQLClient");

                HttpContent? content = null;
                if (data != null)
                {
                    var json = JsonConvert.SerializeObject(data);
                    content = new StringContent(json, Encoding.UTF8, "application/json");
                }

                var response = await client.PostAsync(endpoint, content);
                response.EnsureSuccessStatusCode();

                var responseContent = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<T>(responseContent);
            }
            catch (Exception ex)
            {
                // Log error
                Console.WriteLine($"API POST Error: {ex.Message}");
                throw;
            }
        }

        public async Task<bool> PostAsync(string endpoint, object? data = null)
        {
            try
            {
                var client = _httpClientFactory.CreateClient("MSSQLClient");

                HttpContent? content = null;
                if (data != null)
                {
                    var json = JsonConvert.SerializeObject(data);
                    content = new StringContent(json, Encoding.UTF8, "application/json");
                }

                var response = await client.PostAsync(endpoint, content);
                return response.IsSuccessStatusCode;
            }
            catch (Exception ex)
            {
                // Log error
                Console.WriteLine($"API POST Error: {ex.Message}");
                return false;
            }
        }
    }
}
