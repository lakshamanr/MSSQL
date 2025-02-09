namespace API.Domain.Functions
{
    public class SqlFunctionMetadata
    {
        public string FunctionName { get; set; }
        public SqlFunctionDetail FunctionDetail { get; set; }
        public IEnumerable<SqlFunctionParameter> Parameters { get; set; }
        public string Definition { get; set; }
        public IEnumerable<SqlFunctionDependency> Dependencies { get; set; }
    }

}
