





namespace API.Repository.UserDefinedDataType
{
    public interface IUserDefinedDataTypeRepository
    {
        Task<IEnumerable<Domain.UserDefinedDataType.UserDefinedDataType>> GetAllUserDefinedDataTypesAsync();
        Task<Domain.UserDefinedDataType.UserDefinedDataType?> GetUserDefinedDataTypeWithExtendedPropertiesAsync(string schemaName, string typeName);
        Task UpsertUserDefinedDataTypeExtendedPropertyAsync(string schemaName, string typeName, string description);
    }
}