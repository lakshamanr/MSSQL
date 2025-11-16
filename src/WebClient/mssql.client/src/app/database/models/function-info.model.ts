
export class FunctionInfo {
  functionName: string;

  constructor(data: any) {
    this.functionName = data.functionName || '';
  }
}
