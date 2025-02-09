using API.Repository.Common;
using Microsoft.Extensions.Caching.Distributed;

namespace API.Repository.Functions
{

    /// <summary>
    /// Repository for scalar-valued functions.
    /// </summary>
    public class ScalarFunctionRepository : BaseSqlFunctionRepository
    {
        protected override string FunctionType => "FN";
        public ScalarFunctionRepository(string connectionString) : base(connectionString) { }
    }
}
