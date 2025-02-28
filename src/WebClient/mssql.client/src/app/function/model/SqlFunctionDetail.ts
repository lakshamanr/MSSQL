/**
 * Represents the details of a SQL function.
 */
export class SqlFunctionDetail {
  uses_ansi_nulls: string;
  uses_quoted_identifier: string;
  create_date: string;
  modify_date: string;
  name: string;

  constructor(
    uses_ansi_nulls: string,
    uses_quoted_identifier: string,
    create_date: string,
    modify_date: string,
    name: string
  ) {
    this.uses_ansi_nulls = uses_ansi_nulls;
    this.uses_quoted_identifier = uses_quoted_identifier;
    this.create_date = create_date;
    this.modify_date = modify_date;
    this.name = name;
  }
}
