using API.Common.Helper;
using API.Domain.LeftMenu;
using API.Repository.Common.Repository;

namespace API.Factory.LeftMenu.Factory
{
    /// <summary>
    /// Factory class for creating TreeView nodes for Database Triggers.
    /// </summary>
    internal class TreeViewDatabaseTriggerNodeFactory : TreeViewNodeFactory
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TreeViewDatabaseTriggerNodeFactory"/> class.
        /// </summary>
        /// <param name="treeViewConfiguration">The tree view configuration.</param>
        /// <param name="baseRepository">The base repository.</param>
        public TreeViewDatabaseTriggerNodeFactory(TreeViewConfiguration treeViewConfiguration, IBaseRepository baseRepository)
            : base(treeViewConfiguration, baseRepository)
        {
        }

        /// <summary>
        /// Creates a TreeView node for Database Triggers asynchronously.
        /// </summary>
        /// <param name="currentDbName">The current database name.</param>
        /// <returns>A <see cref="TreeViewJson"/> object representing the node.</returns>
        public override async Task<TreeViewJson> CreateNodeAsync(string currentDbName)
        {
            var TriggerNode = TreeViewNodeHelper.CreateTreeViewNode(
                text: "Database Trigger",
                icon: "fa fa-folder",
                link: $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Programmability/Functions/Database Trigger",
                schemaEnum: SchemaEnums.AllTriggers,
                children: null
            );

            var Triggers = await _baseRepository.LoadDatabaseTriggersAsync(currentDbName);
            if (Triggers.Any())
            {
                TriggerNode.children = Triggers
                   .Select(function => TreeViewNodeHelper.CreateTreeViewNode(
                       function.TriggerName,
                       "fa fa-cogs",
                       link: $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Programmability/Functions/Database Trigger{function.TriggerName}",
                       SchemaEnums.Triggers
                   ))
                   .ToList();
            }
            return TriggerNode;
        }
    }
}
