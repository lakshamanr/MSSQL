import { SqlFunctionParameter } from "./SqlFunctionParameter";
import { SqlFunctionDetail } from "./SqlFunctionDetail";
import { SqlFunctionDependency } from "./SqlFunctionDependency";

/**
 * Represents metadata for a SQL function.
 */
export class SqlFunctionMetadata {
  FunctionName: string;
  FunctionDetail: SqlFunctionDetail;
  Parameters: SqlFunctionParameter[];
  Definition: string;
  Dependencies: SqlFunctionDependency[];

  constructor(
    FunctionName: string,
    FunctionDetail: SqlFunctionDetail,
    Parameters: SqlFunctionParameter[],
    Definition: string,
    Dependencies: SqlFunctionDependency[]
  ) {
    this.FunctionName = FunctionName;
    this.FunctionDetail = FunctionDetail;
    this.Parameters = Parameters;
    this.Definition = Definition;
    this.Dependencies = Dependencies;
  }
}
