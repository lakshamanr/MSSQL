using API.Common.Helper;
using API.Domain.LeftMenu;
using API.Repository.Common;

namespace API.Factory.LeftMenu
{
    /// <summary>
    /// Factory class for creating TreeView nodes for tables.
    /// </summary>
    public class TreeViewTableNodeFactory : TreeViewNodeFactory
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TreeViewTableNodeFactory"/> class.
        /// </summary>
        /// <param name="treeViewConfiguration">The TreeView configuration.</param>
        /// <param name="baseRepository">The base repository.</param>
        public TreeViewTableNodeFactory(TreeViewConfiguration treeViewConfiguration, IBaseRepository baseRepository) : base(treeViewConfiguration, baseRepository)
        {
        }

        /// <summary>
        /// Creates a TreeView node asynchronously for tables.
        /// </summary>
        /// <param name="currentDbName">The current database name.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the TreeView JSON.</returns>
        public override async Task<TreeViewJson> CreateNodeAsync(string currentDbName)
        {
            var tablesNode = TreeViewNodeHelper.CreateTreeViewNode(
                "Tables",
                "fa fa-folder",
                $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Tables",
                SchemaEnums.Tables
            );
            var tables = await _baseRepository.LoadTablesAsync(currentDbName);
            if (tables.Any())
            {
                tablesNode.children = tables.Select(table =>
                    TreeViewNodeHelper.CreateTreeViewNode(
                        table.TableName,
                        "fa fa-table fa-fw",
                        $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Tables/{table.TableName}",
                        SchemaEnums.Table
                    )
                ).ToList();
            }
            return tablesNode;
        }
    }

}
