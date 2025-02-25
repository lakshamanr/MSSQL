import { Component, OnInit } from '@angular/core';
import { TablesModule } from "../../table/tables.module";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  imports: [TablesModule]
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
