import { DatabaseInfo } from "./database-info.model";
import { DbXmlSchema } from "./db-xml-schema.model";
import { FunctionInfo } from "./function-info.model";
import { ProcedureInfo } from "./procedure-info.model";
import { ServerProperty } from "./server-property.model";
import { TriggerInfo } from "./trigger-info.model";
import { UserType } from "./user-type.model";
import { DatabaseFile } from './database-file.model';
import { ViewMetadata } from './view-metadata.model';
import { TablesMetadata } from '../../table/models/tables-metadata.model';

export class DatabaseMetaData {
  dbXmlSchemas: DbXmlSchema[];
  currentDatabaseName: string;
  databaseInfos: DatabaseInfo[];
  databaseServerName: string;
  procedureInfos: ProcedureInfo[];
  scalarFunctionInfos: FunctionInfo[];
  serverAdvanceProperties: ServerProperty[];
  serverProperties: ServerProperty[];
  triggerInfos: TriggerInfo[];
  tableFunctionInfos: FunctionInfo[];
  userTypes: UserType[];
  fileInformations: DatabaseFile[];
  viewMetadata: ViewMetadata[];
  tablesMetadata: TablesMetadata[];
}
