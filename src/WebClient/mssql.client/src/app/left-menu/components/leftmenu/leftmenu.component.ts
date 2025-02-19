import { Component, OnInit } from '@angular/core';
import { LeftMenuService } from '../../services/left-menu.service';
import { LeftMenuTreeViewJson } from '../../models/left-menu-tree-view-json';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html'
})
export class LeftmenuComponent implements OnInit {

  leftmenujsonvalues: any;

  constructor(private leftMenuService: LeftMenuService) { }

  ngOnInit() {
    this.loadLeftMenuData();
  }

  private loadLeftMenuData(): void {
    this.leftMenuService.loadLeftMenuData().subscribe(
      (result) => this.handleLoadSuccess(result),
      (error) => this.handleLoadError(error)
    );
  }

  private handleLoadSuccess(result: any): void {
    this.leftmenujsonvalues = result;
  }

  private handleLoadError(error: any): void {
    console.error(error);
  }

  getNodeData(data: LeftMenuTreeViewJson) {
    // Implement getNodeData logic here
  }
}
