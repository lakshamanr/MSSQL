namespace API.Domain.Triggers
{
    /// <summary>
    /// Represents a database trigger.
    /// </summary>
    public class DatabaseTrigger
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Definition { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ModifyDate { get; set; }
    }
}
