import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { LeftMenuTreeViewJson } from '../../models/left-menu-tree-view-json';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {
  
  leftmenujsonvalues: any;
  constructor(private http: HttpClient,
    @Inject('API_URL') private primaryUrl: string,
    @Inject('ANOTHER_URL') private secondaryUrl: string,) { }

  ngOnInit() {
    this.loadLeftMenuData();
  }
  private loadLeftMenuData(): void
  { 
    const secondaryUrl = 'LeftMenu/left-menu';  // Fallback URL 
    const primaryUrl = `${this.primaryUrl}/LeftMenu/left-menu`; 

    // First attempt with the primary URL
    this.http.get<any>(primaryUrl).subscribe(
      (result) => this.handleLoadSuccess(result),
      (error) => {
        console.error('Primary URL failed, trying secondary URL:', error);

        // If the primary URL fails, attempt with the secondary URL
        this.http.get<any>(secondaryUrl).subscribe(
          (secondaryResult) => this.handleLoadSuccess(secondaryResult),
          (secondaryError) => this.handleLoadError(secondaryError) // Handle error if both fail
        );
      }
    );
  }

  private handleLoadSuccess(result: any): void {
     this.leftmenujsonvalues=result;
  }

  private handleLoadError(error: any): void {
    console.error(error);
  }
  getNodeData(data: LeftMenuTreeViewJson)
  {
    
  }
}
