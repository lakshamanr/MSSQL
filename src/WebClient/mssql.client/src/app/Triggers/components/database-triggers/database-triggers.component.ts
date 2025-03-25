import { Component, OnInit } from '@angular/core';
 
import { DatabaseTriggerService } from '../../services/database-trigger.service';
import { DatabaseTrigger } from '../../models/database-trigger.model';

@Component({
  selector: 'app-database-triggers',
  templateUrl: './database-triggers.component.html',
  styleUrls: ['./database-triggers.component.css']
})
export class DatabaseTriggersComponent implements OnInit {

  triggers: DatabaseTrigger[] = [];
 
   
  constructor(private triggerService: DatabaseTriggerService) { }

  ngOnInit(): void {
    this.getAllTriggers();
  }

  getAllTriggers(): void {
    this.triggerService.getAllTriggers().subscribe(
      (data) => this.triggers = data,
      (error) => console.error('Error fetching triggers:', error)
    );
  } 
}
