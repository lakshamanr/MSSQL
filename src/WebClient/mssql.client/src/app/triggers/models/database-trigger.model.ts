import { TriggerInfo } from './trigger-info.model';

 
export interface DatabaseTrigger {
  name: string;
  description: string;
  definition: string;
  createDate: Date;
  modifyDate: Date;
  triggerInfo: TriggerInfo;
}
