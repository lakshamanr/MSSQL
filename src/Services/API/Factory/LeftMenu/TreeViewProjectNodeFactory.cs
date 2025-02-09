using API.Common.Helper;
using API.Domain.LeftMenu;
using API.Repository.Common;

namespace API.Factory.LeftMenu
{
    /// <summary>
    /// Factory class for creating TreeView project nodes.
    /// </summary>
    public class TreeViewProjectNodeFactory : TreeViewNodeFactory
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TreeViewProjectNodeFactory"/> class.
        /// </summary>
        /// <param name="treeViewConfiguration">The tree view configuration.</param>
        /// <param name="baseRepository">The base repository.</param>
        public TreeViewProjectNodeFactory(TreeViewConfiguration treeViewConfiguration, IBaseRepository baseRepository)
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
            var serverNodeFactory = new TreeViewServerNodeFactory(_treeViewConfiguration, _baseRepository);
            var serverNode = await serverNodeFactory.CreateNodeAsync(currentDbName);

            return TreeViewNodeHelper.CreateTreeViewNode(
                text: _treeViewConfiguration.ProjectName,
                icon: "fa fa-home fa-fw",
                link: $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ProjectName}",
                schemaEnum: SchemaEnums.ProjectInfo,
                children: new List<TreeViewJson> { serverNode }
            );
        }
    }

}
