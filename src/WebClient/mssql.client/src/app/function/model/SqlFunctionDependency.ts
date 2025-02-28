/**
 * Represents a dependency of a SQL function.
 */
export class SqlFunctionDependency {
  name: string;
  type: string;
  Updated: string;
  Selected: string;
  column_name: string;

  constructor(name: string, type: string, Updated: string, Selected: string, column_name: string) {
    this.name = name;
    this.type = type;
    this.Updated = Updated;
    this.Selected = Selected;
    this.column_name = column_name;
  }
}
