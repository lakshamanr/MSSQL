
export class ProcedureInfo {
  procedureName: string;

  constructor(data: any) {
    this.procedureName = data.procedureName || '';
  }
}
