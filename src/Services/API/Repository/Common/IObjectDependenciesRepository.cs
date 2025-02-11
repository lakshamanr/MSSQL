
namespace API.Repository.Common
{
    public interface IObjectDependenciesRepository
    {
        Task<string> ObjectsDependencies(string ObjectName);
    }
}