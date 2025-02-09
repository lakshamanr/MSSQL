using API.Domain.LeftMenu;
using API.Repository.Common.Repository;
namespace API.Factory.LeftMenu.Factory
{
    /// <summary>
    /// Abstract factory class for creating TreeView nodes.
    /// </summary>
    public abstract class TreeViewNodeFactory
    {
        /// <summary>
        /// Base repository instance.
        /// </summary>
        public readonly IBaseRepository _baseRepository;

        /// <summary>
        /// TreeView configuration instance.
        /// </summary>
        public readonly TreeViewConfiguration _treeViewConfiguration;

        /// <summary>
        /// Initializes a new instance of the <see cref="TreeViewNodeFactory"/> class.
        /// </summary>
        /// <param name="treeViewConfiguration">The TreeView configuration.</param>
        /// <param name="baseRepository">The base repository.</param>
        public TreeViewNodeFactory(TreeViewConfiguration treeViewConfiguration, IBaseRepository baseRepository)
        {
            _baseRepository = baseRepository;
            _treeViewConfiguration = treeViewConfiguration;
        }

        /// <summary>
        /// Creates a TreeView node asynchronously.
        /// </summary>
        /// <param name="currentDbName">The current database name.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the TreeView JSON.</returns>
        public abstract Task<TreeViewJson> CreateNodeAsync(string currentDbName);
    }
}
