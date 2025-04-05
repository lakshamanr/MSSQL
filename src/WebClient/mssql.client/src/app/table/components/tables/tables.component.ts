import { Component, OnInit, Inject } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { MenuItem } from 'primeng/api/menuitem'; 
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TablesMetadata } from '../../models/TablesMetaData';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class TablesComponent implements OnInit {
  public cols: any[];
  public tables: TablesMetadata[];
  constructor(private http: HttpClient,
    @Inject('API_URL') private primaryUrl: string,
    @Inject('ANOTHER_URL') private secondaryUrl: string) { 
    
  }

  ngOnInit() {
    this.cols = [
      { field: 'tableName', header: 'extendedPropertyValue' },
      { field: 'extendedPropertyValue', header: 'tableColumns' }
    ];
    this.loadTablesMetadata();
  }
  private loadTablesMetadata(): void {

    const primaryUrl = `${this.primaryUrl}/Tables/GetTableDetails`;
    const secondaryUrl = 'Tables/GetTableDetails';

    // Try the primary URL
    this.http.get<TablesMetadata[]>(primaryUrl).subscribe(
      (result) => this.handleLoadSuccess(result),
      (error) => {
        console.error('Primary URL failed, trying secondary URL:', error);

 
        this.http.get<TablesMetadata[]>(secondaryUrl).subscribe(
          (secondaryResult) => this.handleLoadSuccess(secondaryResult),
          (secondaryError) => this.handleLoadError(secondaryError)
        );
      }
    );
     
  }

  private handleLoadSuccess(result: TablesMetadata[]): void {
     this.tables=result;
  }

  private handleLoadError(error: any): void {
    console.error(error);
  }

}
