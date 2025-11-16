export interface XmlSchemaDetails {
  sqlScript: string;
  mS_Description: string;
  dependentColumns: string[];
  xmlschemreference: XmlSchemaReference[];
  xmlschema: XmlSchemaReference[]; 
}

export interface XmlSchemaReference {
  tableSchema: string;
  tableName: string;
  columnName: string;
  xmlSchemaCollection: string;
}

export interface XmlSchemaCollection {
  xmlSchemaCollections: string;
  mS_Description: string;
}
