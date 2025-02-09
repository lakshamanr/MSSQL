using API.Repository.Common;
using Microsoft.Extensions.Caching.Distributed;

namespace API.Repository.Functions
{
    /// <summary>
    /// Repository for table-valued functions.
    /// </summary>
    public class TableValuedFunctionRepository : BaseSqlFunctionRepository
    {
        protected override string FunctionType => "TF";
        public TableValuedFunctionRepository(string connectionString) : base(connectionString) { }
    }
}
