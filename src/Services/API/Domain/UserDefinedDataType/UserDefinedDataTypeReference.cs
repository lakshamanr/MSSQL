namespace API.Domain.UserDefinedDataType
{
    public class UserDefinedDataTypeReference
    {
        public string ObjectName { get; set; }  // Table/View/SP that references the type
        public string ObjectType { get; set; }  // Type of object (Table, View, SP, etc.)
    }
}
