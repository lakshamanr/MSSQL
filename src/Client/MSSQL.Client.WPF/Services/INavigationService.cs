using System;

namespace MSSQL.Client.WPF.Services
{
    public interface INavigationService
    {
        event EventHandler<NavigationEventArgs>? NavigationRequested;
        void NavigateTo(string objectType, string objectName);
    }

    public class NavigationEventArgs : EventArgs
    {
        public string ObjectType { get; set; }
        public string ObjectName { get; set; }

        public NavigationEventArgs(string objectType, string objectName)
        {
            ObjectType = objectType;
            ObjectName = objectName;
        }
    }
}
