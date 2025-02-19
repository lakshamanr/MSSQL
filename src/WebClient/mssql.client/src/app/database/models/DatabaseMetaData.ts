import { DatabaseInfo } from "./DatabaseInfo";
import { DbXmlSchema } from "./DbXmlSchema";
import { FunctionInfo } from "./FunctionInfo";
import { ProcedureInfo } from "./ProcedureInfo";
import { ServerProperty } from "./ServerProperty";
import { TriggerInfo } from "./TriggerInfo";
import { UserType } from "./UserType";
import { DatabaseFile } from './DatabaseFile';
import { ViewMetadata } from './ViewMetadata';
import { TablesMetadata } from '../../table/models/TablesMetaData';

export interface ServerMetaData {
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
