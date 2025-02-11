using API.Domain.Triggers;

namespace API.Repository.Triggers
{
    public interface IDatabaseTriggerRepository
    {
        Task<IEnumerable<DatabaseTrigger>> GetAllTriggersAsync();
        Task<DatabaseTrigger?> GetTriggerByNameAsync(string triggerName);
        Task<bool> MergeTriggerPropertyAsync(string triggerName, string description);
    }
}