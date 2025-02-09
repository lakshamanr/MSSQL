using API.Common.Helper;
using API.Domain.LeftMenu;
using API.Repository.Common.Repository;
namespace API.Factory.LeftMenu.Factory
{

    /// <summary>
    /// Factory class for creating TreeView nodes for database details.
    /// </summary>
    public class TreeViewDatabaseDetailNodeFactory : TreeViewNodeFactory
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TreeViewDatabaseDetailNodeFactory"/> class.
        /// </summary>
        /// <param name="treeViewConfiguration">The tree view configuration.</param>
        /// <param name="baseRepository">The base repository.</param>
        public TreeViewDatabaseDetailNodeFactory(TreeViewConfiguration treeViewConfiguration, IBaseRepository baseRepository) : base(treeViewConfiguration, baseRepository)
        {
        }

        /// <summary>
        /// Creates a TreeView node asynchronously for the specified database.
        /// </summary>
        /// <param name="currentDbName">Name of the current database.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the TreeViewJson node.</returns>
        public override async Task<TreeViewJson> CreateNodeAsync(string currentDbName)
        {
            var tablesTask = new TreeViewTableNodeFactory(_treeViewConfiguration, _baseRepository).CreateNodeAsync(currentDbName);
            var viewsTask = new TreeViewViewNodeFactory(_treeViewConfiguration, _baseRepository).CreateNodeAsync(currentDbName);
            var programmabilityTask = new TreeViewProgrammabilityNodeFactory(_treeViewConfiguration, _baseRepository).CreateNodeAsync(currentDbName);

            return TreeViewNodeHelper.CreateTreeViewNode(
                text: currentDbName,
                icon: "fa fa-folder",
                link: $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}",
                schemaEnum: SchemaEnums.AllDatabase,
                children: (await Task.WhenAll(tablesTask, viewsTask, programmabilityTask)).ToList()
            );
        }
    }
}
