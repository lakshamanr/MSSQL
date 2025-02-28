/**
 * Represents a parameter for a SQL function.
 */
export class SqlFunctionParameter {
  Parameter_name: string;
  Type: string;
  Length: number;
  Prec: number;
  Scale: number;
  Param_order: number;
  Collation: string;
  ExtendedProperty: string;

  constructor(
    Parameter_name: string,
    Type: string,
    Length: number,
    Prec: number,
    Scale: number,
    Param_order: number,
    Collation: string,
    ExtendedProperty: string
  ) {
    this.Parameter_name = Parameter_name;
    this.Type = Type;
    this.Length = Length;
    this.Prec = Prec;
    this.Scale = Scale;
    this.Param_order = Param_order;
    this.Collation = Collation;
    this.ExtendedProperty = ExtendedProperty;
  }
}
