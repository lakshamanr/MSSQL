namespace API.Domain.Triggers
{
    public class TriggerInfo
    {
        public string TriggerName { get; set; }  // Name of the trigger
        public string SchemaName { get; set; }   // Schema of the object the trigger belongs to
        public string ObjectName { get; set; }   // Name of the table/view the trigger is attached to
        public string ObjectType { get; set; }   // Type of the object (e.g., Table, View)
        public DateTime CreateDate { get; set; } // When the trigger was created
        public DateTime ModifyDate { get; set; } // When the trigger was last modified
        public bool IsDisabled { get; set; }     // Whether the trigger is disabled
        public bool QuotedIdentifierOn { get; set; } // Whether QUOTED_IDENTIFIER is ON
        public bool AnsiNullsOn { get; set; }    // Whether ANSI_NULLS is ON
    }
}
