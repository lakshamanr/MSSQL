using API.Common.Helper;
using API.Domain.LeftMenu;
using API.Repository.Common;

namespace API.Factory.LeftMenu
{
    /// <summary>
    /// Factory class for creating TreeView nodes for user-defined data types.
    /// </summary>
    internal class TreeViewUserDefinedDataTypeNodeFactory : TreeViewNodeFactory
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TreeViewUserDefinedDataTypeNodeFactory"/> class.
        /// </summary>
        /// <param name="treeViewConfiguration">The TreeView configuration.</param>
        /// <param name="baseRepository">The base repository.</param>
        public TreeViewUserDefinedDataTypeNodeFactory(TreeViewConfiguration treeViewConfiguration, IBaseRepository baseRepository)
            : base(treeViewConfiguration, baseRepository)
        {
        }

        /// <summary>
        /// Creates a TreeView node asynchronously for user-defined data types.
        /// </summary>
        /// <param name="currentDbName">The current database name.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the TreeView JSON.</returns>
        public override async Task<TreeViewJson> CreateNodeAsync(string currentDbName)
        {
            var userDefinedNode = TreeViewNodeHelper.CreateTreeViewNode(
                text: "User-Defined Data Types",
                icon: "fa fa-folder",
                link: $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Programmability/DataBaseType/UserDefinedDataType",
                schemaEnum: SchemaEnums.AllUserDefinedDataType,
                children: null
            );

            var userDefined = await _baseRepository.LoadUserDefinedDataTypesAsync(currentDbName);

            if (userDefined.Any())
            {
                userDefinedNode.children = userDefined
                    .Select(userDefined => TreeViewNodeHelper.CreateTreeViewNode(
                        userDefined.UserTypeName,
                        "fa fa-cogs",
                        link: $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Programmability/DataBaseType/UserDefinedDataType/{userDefined.UserTypeName}",
                        SchemaEnums.UserDefinedDataType
                    ))
                    .ToList();
            }
            return userDefinedNode;
        }
    }
}
