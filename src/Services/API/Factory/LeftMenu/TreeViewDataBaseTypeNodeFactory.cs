using API.Common.Helper;
using API.Domain.LeftMenu;
using API.Repository.Common;

namespace API.Factory.LeftMenu
{
    /// <summary>
    /// Factory class to create TreeView nodes for Database Types.
    /// </summary>
    internal class TreeViewDataBaseTypeNodeFactory : TreeViewNodeFactory
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TreeViewDataBaseTypeNodeFactory"/> class.
        /// </summary>
        /// <param name="treeViewConfiguration">The tree view configuration.</param>
        /// <param name="baseRepository">The base repository.</param>
        public TreeViewDataBaseTypeNodeFactory(TreeViewConfiguration treeViewConfiguration, IBaseRepository baseRepository)
            : base(treeViewConfiguration, baseRepository)
        {
        }

        /// <summary>
        /// Creates a TreeView node asynchronously.
        /// </summary>
        /// <param name="currentDbName">Name of the current database.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the TreeViewJson node.</returns>
        public override async Task<TreeViewJson> CreateNodeAsync(string currentDbName)
        {
            var userDefinedDataType = new TreeViewUserDefinedDataTypeNodeFactory(_treeViewConfiguration, _baseRepository).CreateNodeAsync(currentDbName);
            var xmlSchemaCollection = new TreeViewXmlSchemaCollectionNodeFactory(_treeViewConfiguration, _baseRepository).CreateNodeAsync(currentDbName);

            return TreeViewNodeHelper.CreateTreeViewNode(
              text: "Type",
              icon: "fa fa-folder",
              link: $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Programmability/DatabaseType",
              schemaEnum: SchemaEnums.AllDatabaseDataTypes,
              children: (await Task.WhenAll(userDefinedDataType, xmlSchemaCollection)).ToList()
          );
        }
    }
}
