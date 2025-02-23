import { DependencyResult } from './DependencyResult';
import { ExecutionPlanResult } from './ExecutionPlanResult';
import { StoredProcedureCreateScript } from './StoredProcedureCreateScript';
import { StoredProcedureParameter } from './StoredProcedureParameter';
import { StoredProcedureInfo } from './StoredProcedureInfo';
 
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
