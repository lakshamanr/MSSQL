import { Component, OnInit } from '@angular/core';
import { ViewDetails, ViewMetaData } from '../../model/view.model';
import { ViewService } from '../../service/services/view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  viewDetails: ViewDetails[] = [];
  selectedViewMetaData: ViewMetaData | null = null;
  selectedViewName: string = ' HumanResources.vEmployee';

  constructor(private viewService: ViewService) {}

  ngOnInit(): void {
    this.loadAllViews();
  }

  loadAllViews(): void {
    this.viewService.getAllViewData().subscribe((data) => {
      this.viewDetails = data;
    });
  }

  loadViewMetaData(viewName: string): void {
    this.selectedViewName = viewName;
    this.viewService.getViewMetaData(viewName).subscribe((data) => {
      this.selectedViewMetaData = data;
    });
  }

}
