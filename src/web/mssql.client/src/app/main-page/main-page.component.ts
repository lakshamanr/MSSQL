import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  ngOnInit() {
    this.setPanelHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setPanelHeight();
  }

  setPanelHeight() {
    const screenHeight = window.innerHeight;
    let heightPercentage;

    if (screenHeight < 480) {
      heightPercentage = 50;
    } else if (screenHeight < 768) {
      heightPercentage = 89;
    } else {
      heightPercentage = 95; // Adjust this percentage for HD screens
    }

    document.documentElement.style.setProperty('--panel-height', `${heightPercentage}vh`);
  }
}
