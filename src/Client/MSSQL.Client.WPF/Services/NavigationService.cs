namespace MSSQL.Client.WPF.Services
{
    public class NavigationService : INavigationService
    {
        public event EventHandler<NavigationEventArgs>? NavigationRequested;

        public void NavigateTo(string objectType, string objectName)
        {
            NavigationRequested?.Invoke(this, new NavigationEventArgs(objectType, objectName));
        }
    }
}
