import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sql-script-viewer',
  templateUrl: './sql-script-viewer.component.html',
  styleUrls: ['./sql-script-viewer.component.css']
})
export class SqlScriptViewerComponent {
  @Input() script: string;
}
