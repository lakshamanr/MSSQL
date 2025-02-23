import { Component, OnInit } from '@angular/core';
import { ProcedureService } from '../../service/procedure.service';
import { StoredProcedureDescriptionRequest } from '../../model/StoredProcedureDescriptionRequest';
import { ParameterDescriptionRequest } from '../../model/ParameterDescriptionRequest';
import { StoredProcedureMeta } from '../../model/StoredProcedureMeta';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent implements OnInit {

  private storedProcedureName = "dbo.uspLogError";
  iblnShowEditBox: boolean;
  private storedProcedureMetadata: StoredProcedureMeta;
  constructor(private storedProcedureService:ProcedureService) { }

  ngOnInit() {
    this.loadMetadata(this.storedProcedureName)
  }

//     <a (click)="ShowEdit($event)" class="btn btn-default btn-lg a-btn-slide-text" >
//  <span class="fa fa-edit" > </span>
//    < /a>
//    < /div>

//    < div class="form-group" * ngIf="iblnShowEditBox" >
//      <textarea class="form-control" rows = "5" id = "comment"[(ngModel)] = "storedProcedureMetadata.storedProcedureInfo.extendedProperty" > </textarea>
//        < div class="form-group" style = "margin-left: 94%;" >

//          <a (click)="CancelStoreProcMsDesciption($event)" > <i class="fa fa-2x fa-times" > </i></a >& nbsp;
//<a (click)="SaveStoreProcMsDesciption($event)" > <i class="fa fa-2x fa-save" > </i></a >
/*  </div>*/


  /**
   * Fetch metadata for a selected stored procedure.
   */
  loadMetadata(procedureName: string) {
    this.storedProcedureService.getStoredProcedureMetadata(procedureName).subscribe({
      next: (data) => {
        this.storedProcedureMetadata = data;
        console.log('Metadata:', data);
      },
      error: (err) => console.error('Error fetching metadata:', err)
    });
  }
  ShowEdit(): any {
   this.iblnShowEditBox = true; 
  }
  CancelStoreProcMsDesciption(): any {
    //this.ms_description = this.ms_description_old;
    this.iblnShowEditBox = false;
  }

  /**
   * Update stored procedure description.
   */
  updateProcedureDescription() {
    const request: StoredProcedureDescriptionRequest = {
      schemaName: 'dbo',
      storedProcedureName: 'MyStoredProcedure',
      description: 'Updated description'
    };

    this.storedProcedureService.mergeStoredProcedureDescription(request).subscribe({
      next: () => console.log('Stored procedure description updated successfully'),
      error: (err) => console.error('Error updating description:', err)
    });
  }

  /**
   * Update stored procedure parameter description.
   */
  updateParameterDescription() {
    const request: ParameterDescriptionRequest = {
      schemaName: 'dbo',
      storedProcedureName: 'MyStoredProcedure',
      parameterName: 'MyParameter',
      description: 'Updated parameter description'
    };

    this.storedProcedureService.mergeParameterDescription(request).subscribe({
      next: () => console.log('Parameter description updated successfully'),
      error: (err) => console.error('Error updating parameter description:', err)
    });
  }
}
