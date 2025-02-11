using API.Domain.Table;

namespace API.Repository.Table
{
    public interface ITableRepository
    {
        Task<TableMetadata?> LoadTableMetadata(string tableName);
        Task UpdateTableColumnExtendedPropertyAsync(TableColumns tableColumns);
        Task UpdateTableExtendedProperty(TableDescription tableDescription);
    }
}