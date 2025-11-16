import { Component, OnInit } from '@angular/core';
import { ProcedureService } from '../../services/procedure.service';
import { StoredProcedureDescriptionRequest } from '../../models/stored-procedure-description-request.model';
import { ParameterDescriptionRequest } from '../../models/parameter-description-request.model';
import { StoredProcedureMeta } from '../../models/stored-procedure-meta.model';
import { StoredProcedureParameter } from '../../models/stored-procedure-parameter.model';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { filter, take } from 'rxjs/operators';
declare var QP;

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent implements OnInit {

  public iblnLoading: boolean;
  private storedProcedureName;;
  iblnShowEditBox = false;
  filesTree: any;
  language = 'plsql';
  public storedProcedureMetadata!: StoredProcedureMeta;

  constructor(
    private route: ActivatedRoute,
    private storedProcedureService: ProcedureService,
    private authService: AuthService
  ) {
    this.iblnLoading = false;
  }

  ngOnInit(): void {
    this.storedProcedureName = this.route.snapshot.params.objectname;

    // Wait for authentication to be ready before loading data
    this.authService.isAuthenticated.pipe(
      filter(isAuth => isAuth === true),
      take(1)
    ).subscribe(() => {
      this.loadMetadata();
    });
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
        this.iblnLoading = true;
        this.storedProcedureMetadata = data; 
        this.filesTree = JSON.parse(data.storedProcedureDependenciesTree);
        QP.showPlan(document.getElementById("container"), `${this.storedProcedureMetadata.executionPlan.queryPlan}`, { jsTooltips: true });

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
        this.toggleEditBox();
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
