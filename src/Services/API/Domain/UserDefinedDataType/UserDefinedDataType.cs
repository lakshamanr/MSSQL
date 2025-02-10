namespace API.Domain.UserDefinedDataType
{
    public class UserDefinedDataType
    {
        public string Name { get; set; }         // Full name (Schema + Type)
        public bool AllowNulls { get; set; }     // Whether nulls are allowed
        public string BaseTypeName { get; set; } // Base system type
        public int Length { get; set; }          // Max length of the type
        public string CreateScript { get; set; } // SQL script to recreate the type
        public string Description { get; set; }  // Extended property (MS_Description)

        public IEnumerable<API.Domain.UserDefinedDataType.UserDefinedDataTypeReference> userDefinedDataTypeReference { get;set;}
    }

}
