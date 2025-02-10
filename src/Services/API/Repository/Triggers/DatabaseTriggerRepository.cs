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
            DatabaseTrigger? databaseTrigger = null;

            using (var connection = new SqlConnection(_connectionString))
            {
                databaseTrigger = await connection.QueryFirstOrDefaultAsync<DatabaseTrigger>(SqlQueryConstant.GetDatabaseTriggerdtlByName, new { TriggerName = triggerName });

                if (databaseTrigger != null)
                {
                    var triggerInfo = await connection.QueryFirstOrDefaultAsync<TriggerInfo>(SqlQueryConstant.TriggerProperties, new { TriggerName = triggerName });
                    if (triggerInfo != null)
                    {
                        databaseTrigger.triggerInfo = triggerInfo;
                    }
                }

                return databaseTrigger;
            }
        }

        /// <summary>
        /// Merges (updates if exists, otherwise creates) the extended property of a database trigger.
        /// </summary>
        public async Task<bool> MergeTriggerPropertyAsync(string triggerName, string description)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var result = await connection.ExecuteAsync(SqlQueryConstant.MergeTriggerExtendedProperty,
                    new { Trigger_Name = triggerName, Trigger_value = description });

                return result > 0;
            }
        }

    }
}
