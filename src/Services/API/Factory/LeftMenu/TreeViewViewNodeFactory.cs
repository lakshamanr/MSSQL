using API.Common.Helper;
using API.Domain.LeftMenu;
using API.Repository.Common;

namespace API.Factory.LeftMenu
{
    /// <summary>
    /// Factory class for creating TreeView nodes for views.
    /// </summary>
    internal class TreeViewViewNodeFactory : TreeViewNodeFactory
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TreeViewViewNodeFactory"/> class.
        /// </summary>
        /// <param name="treeViewConfiguration">The TreeView configuration.</param>
        /// <param name="baseRepository">The base repository.</param>
        public TreeViewViewNodeFactory(TreeViewConfiguration treeViewConfiguration, IBaseRepository baseRepository)
            : base(treeViewConfiguration, baseRepository)
        {
        }

        /// <summary>
        /// Creates a TreeView node asynchronously for views.
        /// </summary>
        /// <param name="currentDbName">The current database name.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the TreeView JSON.</returns>
        public override async Task<TreeViewJson> CreateNodeAsync(string currentDbName)
        {
            var viewNode = TreeViewNodeHelper.CreateTreeViewNode(
                              text: "Views",
                              icon: "fa fa-folder",
                              link: $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Views",
                              schemaEnum: SchemaEnums.Views,
                              children: null
                          );

            var viewDetails = await _baseRepository.LoadViewAsync(currentDbName);
            if (viewDetails.Any())
            {
                viewNode.children = viewDetails
                    .Select(view => TreeViewNodeHelper.CreateTreeViewNode(
                        view.ViewName,
                        "fa fa-eye",
                        $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Views/{view.ViewName}",
                        SchemaEnums.View
                    ))
                    .ToList();
            }

            return viewNode;
        }
    }
}
