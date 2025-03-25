import { Component, OnInit } from '@angular/core';
import { DatabaseTriggerService } from '../../services/database-trigger.service';
import { DatabaseTrigger } from '../../models/database-trigger.model';

@Component({
  selector: 'app-database-trigger',
  templateUrl: './database-trigger.component.html',
  styleUrls: ['./database-trigger.component.css']
})
export class DatabaseTriggerComponent implements OnInit {
  iblnShowEditBox: boolean = false;

  language = 'sql'; // For ngx-prism

  selectedTrigger?: DatabaseTrigger;
  tiggersName = "HumanResources.dEmployee";
  tiggersDesc = "";

  constructor(private triggerService: DatabaseTriggerService) { }

  ngOnInit(): void {
    this.getTriggerByName(this.tiggersName);
  }
 

  getTriggerByName(name: string): void {
    this.triggerService.getTriggerByName(name).subscribe(
      (data) => { this.selectedTrigger = data; this.tiggersDesc = this.selectedTrigger.description },

      (error) => console.error('Error fetching trigger:', error)
    );
  }

  //mergeTriggerProperty(): void {
  //  this.triggerService.mergeTriggerProperty(this.newTrigger).subscribe(
  //    (message) => {
  //      console.log(message); 
  //    },
  //    (error) => console.error('Error creating/updating trigger:', error)
  //  );
  //}
  // Show edit box for description
  ShowModelPOP(event: Event): void {
    event.preventDefault();
    this.iblnShowEditBox = true;
  }

  // Cancel editing
  CancelTableMsDesciption(event: Event): void {
    event.preventDefault();
    this.iblnShowEditBox = false;
  }

  // Save updated description
  SaveTableMsDesciption(event: Event): void {
    event.preventDefault();
    this.iblnShowEditBox = false;
    this.selectedTrigger.description = this.tiggersDesc;
    this.triggerService.mergeTriggerProperty(this.selectedTrigger).subscribe(
      (message) => {
        console.log(message);
        this.iblnShowEditBox = false; this.getTriggerByName(this.tiggersName);
      },
      (error) => console.error('Error updating trigger description:', error)
    );
  }
}
