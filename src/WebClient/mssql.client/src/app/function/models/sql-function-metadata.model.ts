export interface FunctionDependency {
  /** Name of the dependency */
  name: string;

  /** Type of the dependency */
  type: string;

  /** Updated status */
  updated: string;

  /** Selected status */
  selected: string;

  /** Column name of the dependency */
  column_name: string;
}

export interface SqlFunctionPropertyInfo {
  /** Indicates whether ANSI_NULLS is used */
  uses_ansi_nulls: string;

  /** Indicates whether QUOTED_IDENTIFIER is used */
  uses_quoted_identifier: string;

  /** Creation date of the SQL function */
  create_date: string;

  /** Modification date of the SQL function */
  modify_date: string;

  /** Name of the SQL function */
  name: string;
}

export interface FunctionExtendedPropertyInfo {
  /** Name of the SQL function */
  functionName: string;

  /** Extended details of the function */
  description: string;
} 
export interface FunctionParameter {
  /**
   * The name of the parameter.
   */
  parameterName: string;

  /**
   * The type of the parameter.
   */
  type: string;

  /**
   * The length of the parameter.
   */
  length: number;

  /**
   * The precision of the parameter.
   */
  precision: number;

  /**
   * The scale of the parameter.
   */
  scale: number;

  /**
   * The order of the parameter.
   */
  paramOrder: number;

  /**
   * The collation of the parameter.
   */
  collation: string;

  /**
   * The extended property of the parameter.
   */
  extendedProperty: string;

  /**
   * The function name (dbo.FunctionName).
   */
  functionName: string;
}
export interface SqlFunctionMetadata {
  /** Name of the SQL function */
  functionName: string;

  /** Detailed information about the function */
  properties: SqlFunctionPropertyInfo;

  /** Parameters of the function */
  parameters: FunctionParameter[];

  /** Function definition */
  definition: string;

  /** Dependencies of the function */
  dependencies: FunctionDependency[];

  /** Extended property information */
  extendedPropertyInfo: FunctionExtendedPropertyInfo;
}
