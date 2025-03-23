export interface FunctionDependency {
  /** Name of the dependency */
  name: string;

  /** Type of the dependency */
  type: string;

  /** Updated status */
  Updated: string;

  /** Selected status */
  Selected: string;

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
  /** Define properties based on your actual C# class */
  name: string;
  type: string;
  defaultValue?: string; // Optional, adjust as needed
}

export interface SqlFunctionMetadata {
  /** Name of the SQL function */
  FunctionName: string;

  /** Detailed information about the function */
  FunctionDetail: SqlFunctionPropertyInfo;

  /** Parameters of the function */
  Parameters: FunctionParameter[];

  /** Function definition */
  Definition: string;

  /** Dependencies of the function */
  Dependencies: FunctionDependency[];

  /** Extended property information */
  extendedPropertyInfo: FunctionExtendedPropertyInfo;
}
