using System.Collections.ObjectModel;

namespace MSSQL.Client.WPF.Models
{
    public class LeftMenuTreeNode
    {
        public string? Id { get; set; }
        public string? Label { get; set; }
        public string? Icon { get; set; }
        public string? Type { get; set; }
        public string? SchemaName { get; set; }
        public string? ObjectName { get; set; }
        public bool IsExpanded { get; set; }
        public bool IsLeaf { get; set; }
        public ObservableCollection<LeftMenuTreeNode>? Children { get; set; }

        public LeftMenuTreeNode()
        {
            Children = new ObservableCollection<LeftMenuTreeNode>();
        }
    }

    public class LeftMenuData
    {
        public ObservableCollection<LeftMenuTreeNode>? Nodes { get; set; }
    }
}
