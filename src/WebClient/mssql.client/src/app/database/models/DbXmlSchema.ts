
export class DbXmlSchema {
  schemaName: string;

  constructor(data: any) {
    this.schemaName = data.schemaName || '';
  }
}
