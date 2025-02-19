import { TableConstraint } from './TableConstraint';
import { TableIndex } from './TableIndex';
import { TableForeignKey } from './TableForeignKey';
import { TableProperty } from './TableProperty';
import { TableDescription } from './TableDescription';
import { TableColumn } from './TableColumn';
import { TableCreateScript } from './TableCreateScript';
import { TableFragmentation } from './TableFragmentation';

export interface TableMetadata {
  columns: TableColumn[];
  createScript: TableCreateScript;
  descriptions: TableDescription[];
  indices: TableIndex[];
  foreignKeys: TableForeignKey[];
  properties: TableProperty[];
  constraint: TableConstraint[];
  tableFragmentations: TableFragmentation[];
  tableDependenciesTree: string;
}
