using API.Common.Helper;
using API.Domain.LeftMenu;
using API.Repository.Common;

namespace API.Factory.LeftMenu
{
    /// <summary>
    /// Factory class to create TreeView nodes for databases.
    /// </summary>
    public class TreeViewDatabaseNodeFactory : TreeViewNodeFactory
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TreeViewDatabaseNodeFactory"/> class.
        /// </summary>
        /// <param name="treeViewConfiguration">The tree view configuration.</param>
        /// <param name="baseRepository">The base repository.</param>
        public TreeViewDatabaseNodeFactory(TreeViewConfiguration treeViewConfiguration, IBaseRepository baseRepository)
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
            var dbNode = TreeViewNodeHelper.CreateTreeViewNode(
                "User Database",
                "fa fa-folder",
                $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database",
                SchemaEnums.Databases
            );

            var lstDatabaseInfo = await _baseRepository.LoadDatabases();

            dbNode.children = (await Task.WhenAll(lstDatabaseInfo.Select(async dbName =>
            {
                return await new TreeViewDatabaseDetailNodeFactory(_treeViewConfiguration, _baseRepository)
                            .CreateNodeAsync(dbName.Name);
            }))).ToList();

            return dbNode;
        }
    }

}
