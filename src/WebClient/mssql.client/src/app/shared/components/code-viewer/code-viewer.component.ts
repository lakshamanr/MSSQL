import { Component, Input, OnInit, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.css']
})
export class CodeViewerComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() code: string = '';
  @Input() language: string = 'sql';

  ngOnInit() {
    console.log('CodeViewerComponent initialized');
    console.log('Code length:', this.code ? this.code.length : 0);
    console.log('Language:', this.language);  
    if (this.code) {
      console.log('Code preview:', this.code.substring(0, Math.min(100, this.code.length)));
    }
  }

  ngAfterViewInit() {
    // Trigger Prism highlighting after view is initialized
    this.highlightCode();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['code']) {
      console.log('Code input changed:');
      const prevValue = changes['code'].previousValue;
      const currValue = changes['code'].currentValue;
      
      if (prevValue) {
        console.log('Previous value:', prevValue.substring(0, Math.min(50, prevValue.length)));
      }
      if (currValue) {
        console.log('Current value:', currValue.substring(0, Math.min(50, currValue.length)));
      }
      console.log('Current code length:', this.code ? this.code.length : 0);
      
      // Re-highlight when code changes
      setTimeout(() => this.highlightCode(), 0);
    }
  }

  private highlightCode(): void {
    if (typeof window !== 'undefined' && (window as any).Prism) {
      (window as any).Prism.highlightAll();
    }
  }
}

