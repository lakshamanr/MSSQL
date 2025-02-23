// Represents the result of an execution plan.
export class ExecutionPlanResult {
    queryPlan: string;
    useCounts: string;
    cacheObjectType: string;
    sizeInBytes: string;
    sqlText: string;
    constructor(init?: Partial<ExecutionPlanResult>) {
        Object.assign(this, init);
    }
}
