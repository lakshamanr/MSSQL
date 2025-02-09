using API.Common.Helper;
using API.Domain.LeftMenu;
using API.Repository.Common;

namespace API.Factory.LeftMenu
{
    /// <summary>
    /// Factory class for creating TreeView nodes for Table-valued Functions.
    /// </summary>
    internal class TreeViewTableValuedFunctionsNodeFactory : TreeViewNodeFactory
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TreeViewTableValuedFunctionsNodeFactory"/> class.
        /// </summary>
        /// <param name="treeViewConfiguration">The TreeView configuration.</param>
        /// <param name="baseRepository">The base repository.</param>
        public TreeViewTableValuedFunctionsNodeFactory(TreeViewConfiguration treeViewConfiguration, IBaseRepository baseRepository) : base(treeViewConfiguration, baseRepository)
        {
        }

        /// <summary>
        /// Creates a TreeView node for Table-valued Functions asynchronously.
        /// </summary>
        /// <param name="currentDbName">The current database name.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the TreeView JSON.</returns>
        public override async Task<TreeViewJson> CreateNodeAsync(string currentDbName)
        {
            var tableValueFunctionNode =
                           TreeViewNodeHelper.CreateTreeViewNode(
                          text: "Table-valued Functions",
                          icon: "fa fa-folder",
                          link: $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Programmability/Functions/TableValuedFunctions",
                          schemaEnum: SchemaEnums.AllStoreprocedure,
                          children: null
                      );

            var tableValueFunctions = await _baseRepository.LoadTableValuedFunctionsAsync(currentDbName);
            if (tableValueFunctions.Any())
            {
                tableValueFunctionNode.children = tableValueFunctions
                   .Select(function => TreeViewNodeHelper.CreateTreeViewNode
                   (
                       function.FunctionName,
                       "fa fa-cogs",
                       $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Programmability/Functions/TableValuedFunctions/{function.FunctionName}",
                       SchemaEnums.Storeprocedure
                   ))
                   .ToList();
            }
            return tableValueFunctionNode;
        }
    }
}
