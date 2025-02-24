export class ViewColumns {
  public viewName: string;
  public columnName: string;
  public columnOrder: number;
  public dataType: string;
  public maxLength: number;
  public precision: number;
  public scale: number;
}

export class ViewCreateScript {
  public createViewScript?: string;
}

export class ViewDependency {
  public name: string;
  public type: string;
  public updated: string;
  public selected: string;
  public column_name: string;
  public fullReferenceName: string;
}

export class ViewDetails {
  public viewName: string;
  public viewExtendedProperties: string;
}

export class ViewProperties {
  public usesAnsiNulls: string;
  public usesQuotedIdentifier: string;
  public createDate: string;
  public modifyDate: string;
}

export class ViewMetaData {
  public viewProperties: ViewProperties[];
  public viewDetails: ViewDetails[];
  public viewDependencies: ViewDependency[];
  public viewCreateScript: ViewCreateScript;
  public viewColumns: ViewColumns[];
}
