export class DatabaseInfo {
  name: string;

  constructor(data: any) {
    this.name = data.name || '';
  }
}
