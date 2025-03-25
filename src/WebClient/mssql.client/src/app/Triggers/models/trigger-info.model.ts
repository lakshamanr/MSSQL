export interface TriggerInfo {
  triggerName: string;
  schemaName: string;
  objectName: string;
  objectType: string;
  createDate: Date;
  modifyDate: Date;
  isDisabled: boolean;
  quotedIdentifierOn: boolean;
  ansiNullsOn: boolean;
}
