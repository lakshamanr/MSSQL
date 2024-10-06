import { Component, ViewChild, ElementRef, ChangeDetectionStrategy, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { SplitComponent } from 'angular-split'; 
import { NgxUiLoaderService } from 'ngx-ui-loader';  
import { Inject } from '@angular/core';
import { Router } from '@angular/router';  
import { HttpClient } from '@angular/common/http'; 
import { MenuItem } from 'primeng/api/menuitem'; 
@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'split-example-page'
  },
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy, OnInit {
  iblnShowPages: boolean = false;
  isDisabled: boolean = true;
  useTransition: boolean = true;
  dblClickTime: number = 0;
  logMessages: Array<{ type: string, text: string }> = [];
  status: boolean = false;
  @ViewChild('area1', { static: false }) mySplitEl1: SplitComponent
  @ViewChild('area2', { static: false }) mySplitEl2: SplitComponent
  public http: HttpClient;
  public baseUrl: string;
  public items: MenuItem[];
  public home: MenuItem;
  public istrlogiggedUserName: string;
  iblnHiddeLeftMenu: boolean;
  constructor(private route: Router, http: HttpClient,
    @Inject('API_URL') private apiUrl: string,
    @Inject('ANOTHER_URL') private anotherUrl: string, private ngxLoader: NgxUiLoaderService) {
    this.iblnHiddeLeftMenu = false;
    this.http = http; 

    console.log(this.apiUrl); // Access first URL
    console.log(this.anotherUrl); // Access second URL


    this.istrlogiggedUserName = ""

  }
  ngAfterViewInit() {

  }


  ngOnDestroy() {

  }
  ngOnInit() {
  }
  log(type: string, e: { gutterNum: number, sizes: Array<number> }) {
    this.logMessages.push({ type, text: `${new Date()} > ${type} event > ${JSON.stringify(e)}` });
   
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
