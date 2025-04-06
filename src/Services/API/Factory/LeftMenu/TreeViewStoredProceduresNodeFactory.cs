using API.Common.Helper;
using API.Domain.LeftMenu;
using API.Repository.Common;

namespace API.Factory.LeftMenu
{
    /// <summary>
    /// Factory class for creating TreeView nodes for stored procedures.
    /// </summary>
    internal class TreeViewStoredProceduresNodeFactory : TreeViewNodeFactory
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TreeViewStoredProceduresNodeFactory"/> class.
        /// </summary>
        /// <param name="treeViewConfiguration">The TreeView configuration.</param>
        /// <param name="baseRepository">The base repository.</param>
        public TreeViewStoredProceduresNodeFactory(TreeViewConfiguration treeViewConfiguration, IBaseRepository baseRepository)
            : base(treeViewConfiguration, baseRepository)
        {
        }

        /// <summary>
        /// Creates a TreeView node for stored procedures asynchronously.
        /// </summary>
        /// <param name="currentDbName">The current database name.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the TreeView JSON.</returns>
        public override async Task<TreeViewJson> CreateNodeAsync(string currentDbName)
        {
            var storedProceduresNode = TreeViewNodeHelper.CreateTreeViewNode(
                text: "StoredProcedures",
                icon: "fa fa-folder",
                link: $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Programmability/StoredProcedures",
                schemaEnum: SchemaEnums.StoredProcedures,
                children: null
            );

            var databaseStoredProcedures = await _baseRepository.LoadStoredProceduresAsync(currentDbName);
            if (databaseStoredProcedures.Any())
            {
                storedProceduresNode.children = databaseStoredProcedures
                    .Select(procedure => TreeViewNodeHelper.CreateTreeViewNode(
                        procedure.ProcedureName,
                        "fa fa-cogs",
                        $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Views/{procedure.ProcedureName}",
                        SchemaEnums.StoredProcedure
                    ))
                    .ToList();
            }
            return storedProceduresNode;
        }
    }
}
