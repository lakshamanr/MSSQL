import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { SplitComponent } from 'angular-split'; 
 
@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'Maincontent'
  },
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent    {
  status :boolean = false;
  @ViewChild('area1', { static: false }) mySplitEl1: SplitComponent
  @ViewChild('area2', { static: false }) mySplitEl2: SplitComponent
  constructor() {
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
