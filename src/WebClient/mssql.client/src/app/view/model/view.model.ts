export interface ViewColumns {
  viewName: string;
  columnName: string;
  columnOrder: number;
  dataType: string;
  maxLength: number;
  precision: number;
  scale: number;
}

export interface ViewCreateScript {
  createViewScript?: string;
}

export interface ViewDependency {
  name: string;
  type: string;
  updated: string;
  selected: string;
  column_name: string;
  fullReferenceName: string;
}

export interface ViewDetails {
  viewName: string;
  viewExtendedProperties: string;
}

export interface ViewProperties {
  usesAnsiNulls: string;
  usesQuotedIdentifier: string;
  createDate: string;
  modifyDate: string;
}

export interface ViewMetaData {
  viewProperties: ViewProperties[];
  viewDetails: ViewDetails[];
  viewDependencies: ViewDependency[];
  viewCreateScript: ViewCreateScript;
  viewColumns: ViewColumns[];
}
