import { Component, OnInit, ViewChild } from '@angular/core';
import { SplitComponent } from 'angular-split';

/**
 * Main Page Component
 * Container for the authenticated application with split layout
 */
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  status: boolean = false;
  dblClickTime = 400;
  useTransition = true;

  @ViewChild('area1', { static: false }) mySplitEl1: SplitComponent;
  @ViewChild('area2', { static: false }) mySplitEl2: SplitComponent;

  constructor() { }

  ngOnInit() {
  }

  log(type: string, e: { gutterNum: number, sizes: Array<number> }) {
    switch (type) {
      case "gutterDblClick":
      case "gutterClick":
        {
          this.status = !this.status;
        }
        break;
      case "dragEnd":
        break;
      case "dragStart":
        break;
    }
  }
}
