import { Component, OnInit } from '@angular/core';
import { ProcedureService } from '../../services/procedure.service';
import { StoredProcedureInfo } from "../../models/stored-procedure-info.model";
import { StoredProcedureMeta } from '../../models/stored-procedure-meta.model';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.css']
})
export class ProceduresComponent implements OnInit {
 public storedProcedures: StoredProcedureInfo[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';
  constructor(private storedProcedureService: ProcedureService) { }

  ngOnInit() {
    this.loadStoredProcedures();
  }
/**
   * Fetch all stored procedures.
   */
loadStoredProcedures() {
  this.storedProcedureService.getAllStoredProcedures().subscribe({
    next: (data) => {
      this.storedProcedures = data;
    },
    error: (err) => console.error('Error fetching stored procedures:', err)
  });
}

  // TrackBy function for better performance
  trackByProcedureName(index: number, procedure: StoredProcedureInfo): string {
    return procedure.storedProcedure;
  }
}
