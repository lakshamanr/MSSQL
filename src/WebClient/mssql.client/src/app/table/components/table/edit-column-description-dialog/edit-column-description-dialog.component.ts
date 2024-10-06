import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-column-description-dialog',
  templateUrl: './edit-column-description-dialog.component.html',
  styleUrls: ['./edit-column-description-dialog.component.css']
})
export class EditColumnDescriptionDialogComponent {
  @Input() displayColumnDialog: boolean;
  @Input() selectedColumn: any;
  @Output() saveColumnDescription = new EventEmitter<void>();
  @Output() cancelColumnEdit = new EventEmitter<void>();

  saveDescription() {
    this.saveColumnDescription.emit();
  }

  cancelEdit() {
    this.cancelColumnEdit.emit();
  }
}
