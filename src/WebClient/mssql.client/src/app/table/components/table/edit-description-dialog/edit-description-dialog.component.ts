import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-description-dialog',
  templateUrl: './edit-description-dialog.component.html',
  styleUrls: ['./edit-description-dialog.component.css']
})
export class EditDescriptionDialogComponent {
  @Input() displayDialog: boolean;
  @Input() selectedDescription: any;
  @Input() hasEditPermission: boolean;
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  saveDescription() {
    this.save.emit();
  }

  cancelEdit() {
    this.cancel.emit();
  }
}
