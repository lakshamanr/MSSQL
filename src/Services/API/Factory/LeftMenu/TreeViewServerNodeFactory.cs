using API.Common.Helper;
using API.Domain.LeftMenu;
using API.Repository.Common;

namespace API.Factory.LeftMenu
{
    /// <summary>
    /// Factory class for creating TreeView nodes for the server.
    /// </summary>
    public class TreeViewServerNodeFactory : TreeViewNodeFactory
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TreeViewServerNodeFactory"/> class.
        /// </summary>
        /// <param name="treeViewConfiguration">The TreeView configuration.</param>
        /// <param name="baseRepository">The base repository.</param>
        public TreeViewServerNodeFactory(TreeViewConfiguration treeViewConfiguration, IBaseRepository baseRepository)
            : base(treeViewConfiguration, baseRepository)
        {
        }

        /// <summary>
        /// Creates a TreeView node asynchronously.
        /// </summary>
        /// <param name="currentDbName">The current database name.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the TreeView JSON.</returns>
        public override async Task<TreeViewJson> CreateNodeAsync(string currentDbName)
        {
            var databaseNodeFactory = new TreeViewDatabaseNodeFactory(_treeViewConfiguration, _baseRepository);
            var databaseNodes = await databaseNodeFactory.CreateNodeAsync("");
            return TreeViewNodeHelper.CreateTreeViewNode(
               text: _treeViewConfiguration.ServerName,
               icon: "fa fa-desktop fa-fw",
               link: $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}",
               schemaEnum: SchemaEnums.DatabaseServer,
               children: new List<TreeViewJson> { databaseNodes }
           );
        }
    }

}
