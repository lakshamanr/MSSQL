using API.Domain.LeftMenu;
using API.Repository.Common.Repository;
namespace API.Factory.LeftMenu.Factory
{
    /// <summary>
    /// Factory class for creating TreeView security nodes.
    /// </summary>
    internal class TreeViewSecurityNodeFactory : TreeViewNodeFactory
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TreeViewSecurityNodeFactory"/> class.
        /// </summary>
        /// <param name="treeViewConfiguration">The tree view configuration.</param>
        /// <param name="baseRepository">The base repository.</param>
        public TreeViewSecurityNodeFactory(TreeViewConfiguration treeViewConfiguration, IBaseRepository baseRepository)
            : base(treeViewConfiguration, baseRepository)
        {
        }

        /// <summary>
        /// Creates a TreeView node asynchronously.
        /// </summary>
        /// <param name="currentDbName">Name of the current database.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the TreeViewJson.</returns>
        public override Task<TreeViewJson> CreateNodeAsync(string currentDbName)
        {
            throw new NotImplementedException();
        }
    }
}
