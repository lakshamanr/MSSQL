import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DatabaseTriggerService } from '../../services/database-trigger.service';
import { DatabaseTrigger } from '../../models/database-trigger.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-database-triggers',
  templateUrl: './database-triggers.component.html',
  styleUrls: ['./database-triggers.component.css'],
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DatabaseTriggersComponent implements OnInit {
  triggers: DatabaseTrigger[] = [];
  loading: boolean = false;

  constructor(
    private triggerService: DatabaseTriggerService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getAllTriggers();
  }

  getAllTriggers(): void {
    this.loading = true;
    this.triggerService.getAllTriggers().subscribe({
      next: (data) => {
        this.triggers = data;
        this.loading = false;
        if (data.length === 0) {
          this.messageService.add({
            severity: 'info',
            summary: 'No Triggers',
            detail: 'No database triggers found',
            life: 3000
          });
        }
      },
      error: (error) => {
        console.error('Error fetching triggers:', error);
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to load database triggers',
          life: 5000
        });
      }
    });
  }

  // TrackBy function for better performance
  trackByName(index: number, trigger: DatabaseTrigger): string {
    return trigger.name;
  }
}
