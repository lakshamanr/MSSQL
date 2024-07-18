export class TableProperties {
  property!: string;
  value!: string;

  constructor(data?: any) {
    if (data) {
      this.property = data.Property;
      this.value = data.Value;

    }
  }
}
