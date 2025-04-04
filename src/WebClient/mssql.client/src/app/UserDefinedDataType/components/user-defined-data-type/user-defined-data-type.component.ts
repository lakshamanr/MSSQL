import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { UserDefinedDataType } from '../../models/UserDefinedDataType';
import { UserDefinedDataTypeService } from '../../services/user-defined-data-type.service';
import { UpsertExtendedPropertyRequest } from '../../models/UpsertExtendedPropertyRequest';
import { ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-user-defined-data-type',
  templateUrl: './user-defined-data-type.component.html',
  styleUrls: ['./user-defined-data-type.component.css'],
})
export class UserDefinedDataTypeComponent implements OnInit {
  selectedDataType: UserDefinedDataType;
  newDescription: string = '';
  usedDefindFunction: string;
  iblnShowEditBox: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private dataTypeService: UserDefinedDataTypeService,
    private ngZone: NgZone,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.usedDefindFunction = this.route.snapshot.params.objectname;
    const [schema, type] = this.usedDefindFunction.split('.');
    this.loadDetails(schema, type);
  }

  loadDetails(schemaName: string, typeName: string): void {
    this.dataTypeService.getUserDefinedDataTypeDetails(schemaName, typeName).subscribe((data) => {
      this.selectedDataType = data;
      this.newDescription = data.description || '';
    });
  }

  toggleEditBox(): void {
    this.iblnShowEditBox = !this.iblnShowEditBox;
    if (!this.iblnShowEditBox) {
      this.newDescription = this.selectedDataType.description || '';
    }
  }

  saveDescription(): void {
    if (!this.selectedDataType) return;
    const [schema, type] = this.usedDefindFunction.split('.');
    const request: UpsertExtendedPropertyRequest = {
      schemaName: schema,
      typeName: type,
      description: this.newDescription,
    };

    console.log('Saving new description:', request); // Debugging

    this.dataTypeService.upsertExtendedProperty(request).subscribe(
      () => {
        console.log('Save successful!'); // Debugging

        // Update the description
        this.selectedDataType.description = this.newDescription;

        // Force UI update
        this.ngZone.run(() => {
          this.iblnShowEditBox = false;
          this.cdRef.detectChanges(); // Ensures Angular updates UI
        });
      },
      (error) => {
        console.error('Failed to update description:', error);
      }
    );
  }
}
