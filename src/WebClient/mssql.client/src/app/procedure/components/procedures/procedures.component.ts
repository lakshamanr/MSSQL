import { Component, OnInit } from '@angular/core';
import { ProcedureService } from '../../service/procedure.service';
import { StoredProcedureInfo } from "../../model/StoredProcedureInfo"; 
import { StoredProcedureMeta } from '../../model/StoredProcedureMeta';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.css']
})
export class ProceduresComponent implements OnInit {
  storedProcedures: StoredProcedureInfo[] = [];
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
}
