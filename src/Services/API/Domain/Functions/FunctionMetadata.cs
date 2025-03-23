namespace API.Domain.Functions
{
    /// <summary>
    /// Represents metadata for a SQL function.
    /// </summary>
    public class SqlFunctionMetadata
    {
        /// <summary>
        /// Gets or sets the name of the function.
        /// </summary>
        public string FunctionName { get; set; }

        /// <summary>
        /// Gets or sets the details of the function.
        /// </summary>
        public SqlFunctionPropertyInfo FunctionDetail { get; set; }

        /// <summary>
        /// Gets or sets the parameters of the function.
        /// </summary>
        public IEnumerable<FunctionParameter> Parameters { get; set; }

        /// <summary>
        /// Gets or sets the definition of the function.
        /// </summary>
        public string Definition { get; set; }

        /// <summary>
        /// Gets or sets the dependencies of the function.
        /// </summary>
        public IEnumerable<FunctionDependency> Dependencies { get; set; }

        /// <summary>
        /// Gets or sets the property information of the SQL function.
        /// </summary>
        public FunctionExtendedPropertyInfo ExtendedPropertyInfo { get; set; }
    }

}
