import { Component } from '@angular/core';

/**
 * Footer Component
 * Application footer with version and copyright information
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  version = '1.0.0';
}