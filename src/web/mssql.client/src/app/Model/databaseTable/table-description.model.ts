export class TableDescription {
  public name!: string;
  public nalue!: string; 
    constructor(data?: any) {
        if (data) {
          this.name = data.Name;
          this.nalue = data.Value;
        }
    }
}
