using API.Common.Helper;
using API.Domain.LeftMenu;
using API.Repository.Common.Repository;

namespace API.Factory.LeftMenu.Factory
{
    /// <summary>
    /// Factory class to create TreeView nodes for Aggregate Functions.
    /// </summary>
    internal class TreeViewAggregateFunctionNodeFactory : TreeViewNodeFactory
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TreeViewAggregateFunctionNodeFactory"/> class.
        /// </summary>
        /// <param name="treeViewConfiguration">The tree view configuration.</param>
        /// <param name="baseRepository">The base repository.</param>
        public TreeViewAggregateFunctionNodeFactory(TreeViewConfiguration treeViewConfiguration, IBaseRepository baseRepository)
            : base(treeViewConfiguration, baseRepository)
        {
        }

        /// <summary>
        /// Creates a TreeView node asynchronously for Aggregate Functions.
        /// </summary>
        /// <param name="currentDbName">The current database name.</param>
        /// <returns>A <see cref="TreeViewJson"/> representing the Aggregate Functions node.</returns>
        public override async Task<TreeViewJson> CreateNodeAsync(string currentDbName)
        {
            var AggregateFunctionNode = TreeViewNodeHelper.CreateTreeViewNode(
                text: "Aggregate Functions",
                icon: "fa fa-folder",
                link: $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Programmability/Functions/AggregateFunctions",
                schemaEnum: SchemaEnums.AllAggregateFunciton,
                children: null
            );

            var AggregateFunctions = await _baseRepository.LoadAggregateFunctionsAsync(currentDbName);

            if (AggregateFunctions.Any())
            {
                AggregateFunctionNode.children = AggregateFunctions
                    .Select(aggregate => TreeViewNodeHelper.CreateTreeViewNode(
                        aggregate.FunctionName,
                        "fa fa-cogs",
                        link: $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Programmability/Functions/AggregateFunctions{aggregate.FunctionName}",
                        SchemaEnums.AggregateFunciton
                    ))
                    .ToList();
            }
            return AggregateFunctionNode;
        }
    }
}
