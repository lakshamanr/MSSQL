import { DependencyResult } from './dependency-result.model';
import { ExecutionPlanResult } from './execution-plan-result.model';
import { StoredProcedureCreateScript } from './stored-procedure-create-script.model';
import { StoredProcedureParameter } from './stored-procedure-parameter.model';
import { StoredProcedureInfo } from './stored-procedure-info.model';
 
// Represents metadata for a stored procedure.
export class StoredProcedureMeta {
  dependencies: DependencyResult[] = [];
  parameters: StoredProcedureParameter[] = [];
  createScript: StoredProcedureCreateScript;
  executionPlan: ExecutionPlanResult;
  storedProcedureDependenciesTree: string = '';
  storedProcedureInfo: StoredProcedureInfo;
  constructor(init?: Partial<StoredProcedureMeta>) {
    Object.assign(this, init);
  }
}
