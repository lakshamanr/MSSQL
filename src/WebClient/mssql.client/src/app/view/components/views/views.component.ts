import { Component, OnInit } from '@angular/core';
import { ViewDetails } from '../../model/view.model';
import { ViewService } from '../../service/services/view.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {
  public cols: any[];
  viewDetails: ViewDetails[] = [];
    constructor(private viewService: ViewService) {}
  
  ngOnInit(): void {
    this.cols = [
      { field: 'viewName', header: 'viewExtendedProperties' } 
    ];
      this.loadAllViews();
    }
  
    loadAllViews(): void {
      this.viewService.getAllViewData().subscribe((data) => {
        this.viewDetails = data;
      });
    }
}
