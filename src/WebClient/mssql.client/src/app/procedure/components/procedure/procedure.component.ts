import { Component, OnInit } from '@angular/core';
import { ProcedureService } from '../../service/procedure.service';
import { StoredProcedureDescriptionRequest } from '../../model/StoredProcedureDescriptionRequest';
import { ParameterDescriptionRequest } from '../../model/ParameterDescriptionRequest';
import { StoredProcedureMeta } from '../../model/StoredProcedureMeta';
import { StoredProcedureParameter } from '../../model/StoredProcedureParameter';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent implements OnInit {

  private storedProcedureName = "HumanResources.uspUpdateEmployeeHireInfo";
  iblnShowEditBox = false;  
  filesTree: any; 
  language = 'plsql';
  public storedProcedureMetadata!: StoredProcedureMeta;

  constructor(private storedProcedureService: ProcedureService) {}

  ngOnInit(): void {
    this.loadMetadata();
  } 

  /**
   * Extract schema from stored procedure name.
   */
  private getSchema(): string {
    return this.storedProcedureName.split('.')[0] || '';   
  }
  private getStoreprocedureName(): string {
    return this.storedProcedureName.split('.')[1] || '';
  }

  /**
   * Fetch metadata for the stored procedure.
   */
  private loadMetadata(): void {
    this.storedProcedureService.getStoredProcedureMetadata(this.storedProcedureName).subscribe({
      next: (data) => {
        this.storedProcedureMetadata = data; 
        this.filesTree = JSON.parse(data.storedProcedureDependenciesTree); 
      },
      error: (err) => console.error('Error fetching metadata:', err)
    });
  }

  /**
   * Toggle edit mode for the stored procedure description.
   */
  toggleEditBox(): void {
    this.iblnShowEditBox = !this.iblnShowEditBox;
  }
  CancelStoreProcMsDesciption(): void {
    this.iblnShowEditBox = false;
  }

  /**
   * Update stored procedure description.
   */
  updateProcedureDescription(): void {
    if (!this.storedProcedureMetadata.storedProcedureInfo.extendedProperty) {
      console.error('No description available to update.');
      return;
    }

    const request: StoredProcedureDescriptionRequest = {
      schemaName: this.getSchema(),
      storedProcedureName: this.getStoreprocedureName(),
      description: this.storedProcedureMetadata.storedProcedureInfo.extendedProperty
    };

    this.storedProcedureService.mergeStoredProcedureDescription(request).subscribe({
      next: () => {
        console.log('Stored procedure description updated successfully');
        this.iblnShowEditBox = !this.iblnShowEditBox;
      },
      error: (err) => console.error('Error updating description:', err)
    });
  } 
  updateParameterDescription(parameter:StoredProcedureParameter): void {
    const request: ParameterDescriptionRequest = {
      schemaName: this.getSchema(),
      storedProcedureName: this.getStoreprocedureName(),
      parameterName: parameter.parameterName,  // This should be dynamic based on selection
      description: parameter.extendedProperty
    };

    this.storedProcedureService.mergeParameterDescription(request).subscribe({
      next: () => {
        console.log('Parameter description updated successfully');
        this.toggleParameterEdit(parameter)
      },
      error: (err) => console.error('Error updating parameter description:', err)
    });
  }
  toggleParameterEdit(parameter: any): void {
    parameter.isEditing = !parameter.isEditing;
  } 
}
