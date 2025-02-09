namespace API.Domain.StoredProcedure
{
    public class ExecutionPlanResult
{
    public string QueryPlan { get; set; }
    public string UseCounts { get; set; }
    public string CacheObjectType { get; set; }
    public string SizeInBytes { get; set; }
    public string SQLText { get; set; }
}

}
