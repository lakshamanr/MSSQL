namespace API.Repository.Functions
{
   
    
    public class AggregateFunctionRepository : BaseSqlFunctionRepository
    {
        protected override string FunctionType => "AF";
        public AggregateFunctionRepository(string connectionString) : base(connectionString) { }
    }

}
