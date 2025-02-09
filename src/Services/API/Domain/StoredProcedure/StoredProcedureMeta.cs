namespace API.Domain.StoredProcedure
{

    public class StoredProcedureMeta
    { 
        public IEnumerable<DependencyResult> Dependencies { get; set; } = new List<DependencyResult>();
        public IEnumerable<StoredProcedureParameter> Parameters { get; set; } = new List<StoredProcedureParameter>();
        public StoredProcedureCreateScript CreateScript { get; set; }
        public ExecutionPlanResult ExecutionPlan { get; set; }
    }

}
