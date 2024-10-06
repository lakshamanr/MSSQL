
export class ServerProperty {
  name: string;
  value: string;

  constructor(data: any) {
    this.name = data.name || '';
    this.value = data.value || '';
  }
}
