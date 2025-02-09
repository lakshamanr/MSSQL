using API.Common.Helper;
using API.Domain.LeftMenu;
using API.Repository.Common.Repository;
namespace API.Factory.LeftMenu.Factory
{
    /// <summary>
    /// Factory class for creating TreeView nodes for functions.
    /// </summary>
    internal class TreeViewFunctionNodeFactory : TreeViewNodeFactory
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TreeViewFunctionNodeFactory"/> class.
        /// </summary>
        /// <param name="treeViewConfiguration">The tree view configuration.</param>
        /// <param name="baseRepository">The base repository.</param>
        public TreeViewFunctionNodeFactory(TreeViewConfiguration treeViewConfiguration, IBaseRepository baseRepository)
            : base(treeViewConfiguration, baseRepository)
        {
        }

        /// <summary>
        /// Creates a TreeView node asynchronously.
        /// </summary>
        /// <param name="currentDbName">Name of the current database.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the TreeViewJson.</returns>
        public override async Task<TreeViewJson> CreateNodeAsync(string currentDbName)
        {
            var tableValueFunctionNode = new TreeViewTableValuedFunctionsNodeFactory(_treeViewConfiguration, _baseRepository).CreateNodeAsync(currentDbName);
            var scalarValueFunctionNode = new TreeViewScalarValuedFunctionNodeFactory(_treeViewConfiguration, _baseRepository).CreateNodeAsync(currentDbName);
            var aggregateFunctionNode = new TreeViewAggregateFunctionNodeFactory(_treeViewConfiguration, _baseRepository).CreateNodeAsync(currentDbName);

            return TreeViewNodeHelper.CreateTreeViewNode(
                text: "Functions",
                icon: "fa fa-folder",
                link: $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Programmability/Functions",
                schemaEnum: SchemaEnums.AllFunctions,
                children: (await Task.WhenAll(tableValueFunctionNode, scalarValueFunctionNode, aggregateFunctionNode)).ToList()
            );
        }
    }
}
