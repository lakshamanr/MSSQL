import { Component, OnInit } from '@angular/core';
import { DatabaseTriggerService } from '../../services/database-trigger.service';
import { DatabaseTrigger } from '../../models/database-trigger.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-database-trigger',
  templateUrl: './database-trigger.component.html',
  styleUrls: ['./database-trigger.component.css'],
  providers: [MessageService]
})
export class DatabaseTriggerComponent implements OnInit {
  iblnShowEditBox: boolean = false;
  loading: boolean = false;
  saving: boolean = false;

  language = 'sql';

  selectedTrigger?: DatabaseTrigger;
  tiggersName: string;
  tiggersDesc = "";

  breadcrumbItems: MenuItem[] = [];
  homeBreadcrumb: MenuItem = { icon: 'pi pi-home', routerLink: '/' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private triggerService: DatabaseTriggerService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.tiggersName = this.route.snapshot.params.objectname;
    this.setupBreadcrumb();
    this.getTriggerByName(this.tiggersName);
  }

  setupBreadcrumb(): void {
    this.breadcrumbItems = [
      { label: 'Triggers', routerLink: '/Trigger/s' },
      { label: this.tiggersName }
    ];
  }

  getTriggerByName(name: string): void {
    this.loading = true;
    this.triggerService.getTriggerByName(name).subscribe({
      next: (data) => {
        this.selectedTrigger = data;
        this.tiggersDesc = this.selectedTrigger ? this.selectedTrigger.description || '' : '';
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching trigger:', error);
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to load trigger details',
          life: 5000
        });
      }
    });
  }

  ShowModelPOP(event: Event): void {
    event.preventDefault();
    this.iblnShowEditBox = true;
  }

  CancelTableMsDesciption(event: Event): void {
    event.preventDefault();
    this.tiggersDesc = this.selectedTrigger ? this.selectedTrigger.description || '' : '';
    this.iblnShowEditBox = false;
  }

  SaveTableMsDesciption(event: Event): void {
    event.preventDefault();

    if (!this.selectedTrigger) {
      return;
    }

    this.saving = true;
    this.selectedTrigger.description = this.tiggersDesc;

    this.triggerService.mergeTriggerProperty(this.selectedTrigger).subscribe({
      next: (message) => {
        console.log(message);
        this.saving = false;
        this.iblnShowEditBox = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Description updated successfully',
          life: 3000
        });
        this.getTriggerByName(this.tiggersName);
      },
      error: (error) => {
        console.error('Error updating trigger description:', error);
        this.saving = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to update description',
          life: 5000
        });
      }
    });
  }
}
