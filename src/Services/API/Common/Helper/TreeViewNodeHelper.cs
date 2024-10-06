using API.Domain.LeftMenu;

namespace API.Common.Helper
{
    public static class TreeViewNodeHelper
    {
        public static TreeViewJson CreateTreeViewNode(string text, string icon, string link, SchemaEnums schemaEnum, bool selected = false, bool expand = false, int badge = 0, List<TreeViewJson> children = null)
        {
            return new TreeViewJson
            {
                text = text,
                icon = icon,
                mdaIcon = text,
                link = link,
                selected = selected,
                expand = true,
                badge = badge,
                SchemaEnums = schemaEnum,
                children = children ?? new List<TreeViewJson>()
            };
        }
    }
}
