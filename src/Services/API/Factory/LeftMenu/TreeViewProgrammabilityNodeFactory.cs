using API.Common.Helper;
using API.Domain.LeftMenu;
using API.Repository.Common;

namespace API.Factory.LeftMenu
{
    /// <summary>
    /// Factory class for creating TreeView nodes for Programmability.
    /// </summary>
    internal class TreeViewProgrammabilityNodeFactory : TreeViewNodeFactory
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TreeViewProgrammabilityNodeFactory"/> class.
        /// </summary>
        /// <param name="treeViewConfiguration">The tree view configuration.</param>
        /// <param name="baseRepository">The base repository.</param>
        public TreeViewProgrammabilityNodeFactory(TreeViewConfiguration treeViewConfiguration, IBaseRepository baseRepository)
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
            var storedProceduresNode = new TreeViewStoredProceduresNodeFactory(_treeViewConfiguration, _baseRepository).CreateNodeAsync(currentDbName);
            var functionNode = new TreeViewFunctionNodeFactory(_treeViewConfiguration, _baseRepository).CreateNodeAsync(currentDbName);
            var databaseTriggerNode = new TreeViewDatabaseTriggerNodeFactory(_treeViewConfiguration, _baseRepository).CreateNodeAsync(currentDbName);
            var databaseTypeNode = new TreeViewDataBaseTypeNodeFactory(_treeViewConfiguration, _baseRepository).CreateNodeAsync(currentDbName);

            return TreeViewNodeHelper.CreateTreeViewNode(
                text: "Programmability",
                icon: "fa fa-folder",
                link: $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Programmability",
                schemaEnum: SchemaEnums.AllDatabase,
                children: (await Task.WhenAll(storedProceduresNode, functionNode, databaseTriggerNode, databaseTypeNode)).ToList()
            );
        }
    }
}
