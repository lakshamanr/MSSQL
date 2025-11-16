
export class TriggerInfo {
  triggerName: string;

  constructor(data: any) {
    this.triggerName = data.triggerName || '';
  }
}
