using API.Common.Helper;
using API.Domain.LeftMenu;
using API.Repository.Common.Repository;

namespace API.Factory.LeftMenu.Factory
{
    /// <summary>
    /// Factory class for creating TreeView nodes for Scalar Valued Functions.
    /// </summary>
    internal class TreeViewScalarValuedFunctionNodeFactory : TreeViewNodeFactory
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TreeViewScalarValuedFunctionNodeFactory"/> class.
        /// </summary>
        /// <param name="treeViewConfiguration">The tree view configuration.</param>
        /// <param name="baseRepository">The base repository.</param>
        public TreeViewScalarValuedFunctionNodeFactory(TreeViewConfiguration treeViewConfiguration, IBaseRepository baseRepository)
            : base(treeViewConfiguration, baseRepository)
        {
        }

        /// <summary>
        /// Creates a TreeView node for Scalar Valued Functions asynchronously.
        /// </summary>
        /// <param name="currentDbName">The current database name.</param>
        /// <returns>A <see cref="TreeViewJson"/> representing the Scalar Valued Functions node.</returns>
        public override async Task<TreeViewJson> CreateNodeAsync(string currentDbName)
        {
            var scalarFunctionNode = TreeViewNodeHelper.CreateTreeViewNode(
                text: "ScalarFunctions",
                icon: "fa fa-folder",
                link: $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Programmability/Functions/ScalarValuedFunctions",
                schemaEnum: SchemaEnums.AllScalarValueFunctions,
                children: null
            );

            var scalarFunctions = await _baseRepository.LoadScalarFunctionsAsync(currentDbName);
            if (scalarFunctions.Any())
            {
                scalarFunctionNode.children = scalarFunctions
                    .Select(scalarFunction => TreeViewNodeHelper.CreateTreeViewNode(
                        scalarFunction.FunctionName,
                        "fa fa-cogs",
                        link: $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Programmability/Functions/ScalarValuedFunctions/{scalarFunction.FunctionName}",
                        SchemaEnums.ScalarValueFunctions
                    ))
                    .ToList();
            }
            return scalarFunctionNode;
        }
    }
}
