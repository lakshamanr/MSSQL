import { Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { SplitComponent, SplitAreaDirective } from 'angular-split';
import { AuthService } from '../../auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit, AfterViewInit, OnDestroy {
  status: boolean = false;
  dblClickTime: number = 300;
  useTransition: boolean = true;

  @ViewChild('split', { static: false }) splitComponent: SplitComponent;
  @ViewChild('area1', { static: false }) area1: SplitAreaDirective;
  @ViewChild('area2', { static: false }) area2: SplitAreaDirective;

  private previousSizes: number[] = [25, 75];
  private authSubscription: Subscription;

  constructor(
    private cdr: ChangeDetectorRef,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Subscribe to auth state changes and trigger change detection
    // This ensures the view updates when authentication completes
    this.authSubscription = this.authService.isAuthenticated.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  log(type: string, e: { gutterNum: number, sizes: Array<number> }) {
    switch (type) {
      case "gutterDblClick":
      case "gutterClick":
        {
          this.toggleSidebar();
        }
        break;
      case "dragEnd":
        // Store the sizes when user manually adjusts
        if (!this.status) {
          this.previousSizes = [...e.sizes];
        }
        break;
      case "dragStart":
        console.log('Drag started', e);
        break;
      case "transitionEnd":
        console.log('Transition ended', e);
        break;
    }
  }
  toggleSidebar() {
    this.status = !this.status;

    const toggleSound = new Audio('assets/switch.mp3'); // add a small click sound in /assets
    toggleSound.volume = 0.3;
    toggleSound.play();

    if (this.status) {
      this.area1.size = 0;
      this.area2.size = 100;
    } else {
      this.area1.size = this.previousSizes[0];
      this.area2.size = this.previousSizes[1];
    }

    this.cdr.markForCheck();
  }
  ngAfterViewInit() {

  }

  ngOnDestroy() {
    // Clean up subscription to prevent memory leaks
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

}
