using API.Domain.LeftMenu;
using API.Factory.LeftMenu;
using API.Repository.Common;

namespace API.Service.LeftMenu.Service
{
    /// <summary>
    /// Generates JSON structure for TreeView.
    /// </summary>
    public class TreeViewJsonGenerator
    {
        private TreeViewConfiguration? _treeViewContext;
        private readonly IBaseRepository _baseRepository;
        private string? _currentDbName;

        /// <summary>
        /// Initializes a new instance of the <see cref="TreeViewJsonGenerator"/> class.
        /// </summary>
        /// <param name="baseRepository">The base repository.</param>
        public TreeViewJsonGenerator(IBaseRepository baseRepository)
        {
            _baseRepository = baseRepository;
            _treeViewContext = PrepareTreeViewConfigurationApi();
        }

        /// <summary>
        /// Prepares the TreeView configuration API.
        /// </summary>
        /// <returns>The TreeView configuration.</returns>
        private TreeViewConfiguration PrepareTreeViewConfigurationApi()
        {
            TreeViewConfiguration treeViewConfiguration = new TreeViewConfiguration
            {
                ProjectName = "Project",
                ServerName = _baseRepository.LoadDatabaseServerName()
            };
            return treeViewConfiguration;
        }

        /// <summary>
        /// Gets the project structure asynchronously.
        /// </summary>
        /// <returns>The TreeView JSON structure.</returns>
        public async Task<TreeViewJson> GetProjectStructureAsync()
        {
            return await new TreeViewProjectNodeFactory(_treeViewContext, _baseRepository).CreateNodeAsync("");
        }
    }
}
