using API.Common.Helper;
using API.Domain.LeftMenu;
using API.Repository.Common;

namespace API.Factory.LeftMenu
{
    /// <summary>
    /// Factory class for creating TreeView nodes for XML Schema Collections.
    /// </summary>
    internal class TreeViewXmlSchemaCollectionNodeFactory : TreeViewNodeFactory
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TreeViewXmlSchemaCollectionNodeFactory"/> class.
        /// </summary>
        /// <param name="treeViewConfiguration">The TreeView configuration.</param>
        /// <param name="baseRepository">The base repository.</param>
        public TreeViewXmlSchemaCollectionNodeFactory(TreeViewConfiguration treeViewConfiguration, IBaseRepository baseRepository)
            : base(treeViewConfiguration, baseRepository)
        {
        }

        /// <summary>
        /// Creates a TreeView node for XML Schema Collections asynchronously.
        /// </summary>
        /// <param name="currentDbName">The current database name.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the TreeView JSON.</returns>
        public override async Task<TreeViewJson> CreateNodeAsync(string currentDbName)
        {
            var xmlSchemaNode = TreeViewNodeHelper.CreateTreeViewNode(
                text: "XML Schema Collections",
                icon: "fa fa-folder",
                link: $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Programmability/DatabaseType/XmlSchemaCollection",
                schemaEnum: SchemaEnums.AllXmlSchemaCollections,
                children: null
            );

            var xmlSchemas = await _baseRepository.LoadXmlSchemaCollectionsAsync(currentDbName);

            if (xmlSchemas.Any())
            {
                xmlSchemaNode.children = xmlSchemas
                    .Select(xmlSchema => TreeViewNodeHelper.CreateTreeViewNode(
                        xmlSchema.SchemaName,
                        "fa fa-cogs",
                        link: $"/{_treeViewConfiguration.ProjectName}/{_treeViewConfiguration.ServerName}/User Database/{currentDbName}/Programmability/DatabaseType/XmlSchemaCollection/{xmlSchema.SchemaName}",
                        SchemaEnums.XmlSchemaCollection
                    ))
                    .ToList();
            }
            return xmlSchemaNode;
        }
    }
}
