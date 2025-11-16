import { TableConstraint } from './table-constraint.model';
import { TableIndex } from './table-index.model';
import { TableForeignKey } from './table-foreign-key.model';
import { TableProperty } from './table-property.model';
import { TableDescription } from './table-description.model';
import { TableColumn } from './table-column.model';
import { TableCreateScript } from './table-create-script.model';
import { TableFragmentation } from './table-fragmentation.model';

export interface TableMetadata {
  columns: TableColumn[];
  createScript: TableCreateScript;
  descriptions: TableDescription[];
  indices: TableIndex[];
  foreignKeys: TableForeignKey[];
  properties: TableProperty[];
  constraints: TableConstraint[];
  tableFragmentations: TableFragmentation[];
  tableDependenciesTree: string;
}
