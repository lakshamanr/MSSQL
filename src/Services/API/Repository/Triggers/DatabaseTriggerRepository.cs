using API.Common.Queries;
using API.Domain.Triggers;
using Dapper;
using System.Data.SqlClient;

namespace API.Repository.Triggers
{
    public class DatabaseTriggerRepository
    {
        private readonly string _connectionString;

        public DatabaseTriggerRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        /// <summary>
        /// Retrieves all database triggers.
        /// </summary>
        public async Task<IEnumerable<DatabaseTrigger>> GetAllTriggersAsync()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                return await connection.QueryAsync<DatabaseTrigger>(SqlQueryConstant.GetAllDatabaseTrigger);
            }
        }

        /// <summary>
        /// Retrieves detailed information about a specific trigger by name.
        /// </summary>
        public async Task<DatabaseTrigger?> GetTriggerByNameAsync(string triggerName)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                return await connection.QueryFirstOrDefaultAsync<DatabaseTrigger>(SqlQueryConstant.GetDatabaseTriggerdtlByName, new { TiggersName = triggerName });
            }
        }

        /// <summary>
        /// Updates the extended property of a database trigger.
        /// </summary>
        public async Task<bool> UpdateTriggerPropertyAsync(string triggerName, string description)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var result = await connection.ExecuteAsync(SqlQueryConstant.UpdateTriggerExtendedProperty, new { Trigger_Name = triggerName, Trigger_value = description });
                return result > 0;
            }
        }

        /// <summary>
        /// Creates a new extended property for a database trigger.
        /// </summary>
        public async Task<bool> CreateTriggerPropertyAsync(string triggerName, string description)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var result = await connection.ExecuteAsync(SqlQueryConstant.CreateTriggerExtendedProperty, new { Trigger_Name = triggerName, Trigger_value = description });
                return result > 0;
            }
        }
    }
}
