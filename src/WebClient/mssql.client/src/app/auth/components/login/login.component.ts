import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMessage: string = '';
  private originalStyles: Map<string, string> = new Map();
  private loginAttempts: number = 0;
  private lastAttemptTime: number = 0;
  private readonly MAX_ATTEMPTS = 5;
  private readonly LOCKOUT_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    // Redirect to home if already logged in
    if (this.authService.isAuthenticatedValue) {
      this.router.navigate(['/']);
    }
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
    this.returnUrl = '/';
  }

  ngOnInit(): void {
    // Get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    // Hide elements when login page loads
    this.hideElements();
  }

  ngOnDestroy(): void {
    // Show elements back when leaving login page
    this.showElements();
  }

  private hideElements(): void {
    // Hide by ID
    const area1 = document.getElementById('asSplitArea1');
    if (area1) {
      this.originalStyles.set('asSplitArea1-display', area1.style.display);
      area1.style.display = 'none'; 
      area1.style.order = '2';
      area1.style.flex = '0 0 0%';
    }
    const area2 = document.getElementById('asSplitArea2');
    if (area2) {
      this.originalStyles.set('asSplitArea2-flex', area2.style.flex);
      this.originalStyles.set('asSplitArea2-order', area2.style.order);
      area2.style.order = '2';
      area2.style.flex = '0 0 100%';
    }
    // Hide header
    const header = document.querySelector('header');
    if (header) {
      header.style.display = 'none';
    }

    // Hide by class names
    const classesToHide = [
      'as-split-gutter-icon',
      'as-split-gutter',
      'menu-toggle'
    ];

    classesToHide.forEach(className => {
      const elements = document.querySelectorAll(`.${className}`);
      elements.forEach(element => {
        (element as HTMLElement).style.display = 'none';
      });
    });
  }

  private showElements(): void {
    // Show by ID
    const area1 = document.getElementById('asSplitArea1');
    if (area1) {
      area1.style.display = this.originalStyles.get('asSplitArea1-display') || '';
      area1.style.flex = this.originalStyles.get('asSplitArea1-flex') || '0 0 calc(25% - 2.5px)';
      area1.style.order = this.originalStyles.get('asSplitArea1-order') || '0';
    } 

    // Restore asSplitArea2
    const area2 = document.getElementById('asSplitArea2');
    if (area2) {
      area2.style.flex = this.originalStyles.get('asSplitArea2-flex') || '0 0 calc(75% - 7.5px)';
      area2.style.order = this.originalStyles.get('asSplitArea2-order') || '2';
    }

    // Show header
    const header = document.querySelector('header');
    if (header) {
      header.style.display = '';
    }

    // Show by class names
    const classesToShow = [
      'as-split-gutter-icon',
      'as-split-gutter',
      'menu-toggle'
    ];

    classesToShow.forEach(className => {
      const elements = document.querySelectorAll(`.${className}`);
      elements.forEach(element => {
        (element as HTMLElement).style.display = '';
      });
    });
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  /**
   * Sanitize input to prevent XSS attacks
   */
  private sanitizeInput(input: string): string {
    if (!input) return '';

    // Remove any HTML tags and dangerous characters
    return input
      .trim()
      .replace(/[<>\"'\/]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '');
  }

  onSubmit(): void {
    this.submitted = true;
    this.errorMessage = '';

    // Stop if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // Check for rate limiting
    const currentTime = Date.now();
    if (this.loginAttempts >= this.MAX_ATTEMPTS) {
      const timeSinceLastAttempt = currentTime - this.lastAttemptTime;
      if (timeSinceLastAttempt < this.LOCKOUT_DURATION) {
        const remainingMinutes = Math.ceil((this.LOCKOUT_DURATION - timeSinceLastAttempt) / 60000);
        this.errorMessage = `Too many failed login attempts. Please try again in ${remainingMinutes} minute(s).`;
        return;
      } else {
        // Reset after lockout duration
        this.loginAttempts = 0;
      }
    }

    // Sanitize inputs to prevent XSS attacks
    const username = this.sanitizeInput(this.f.username.value);
    const password = this.f.password.value; // Don't log or sanitize password, but validate length

    // Additional validation
    if (username.length > 100 || password.length > 100) {
      this.errorMessage = 'Username or password is too long.';
      return;
    }

    this.loading = true;
    this.authService.login(username, password)
      .subscribe(
        response => {
          this.loading = false;
          console.log('Login successful:', response);
          // Reset login attempts on success
          this.loginAttempts = 0;
          this.lastAttemptTime = 0;
          // Show elements back before navigating
          this.showElements();
          // Navigate to the return URL or default to Database
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.loading = false;
          console.error('Login error:', error);

          // Increment failed login attempts
          this.loginAttempts++;
          this.lastAttemptTime = Date.now();

          // Handle different error scenarios
          if (error.error && error.error.error_description) {
            this.errorMessage = error.error.error_description;
          } else if (error.status === 0) {
            this.errorMessage = 'Unable to connect to the server. Please check your connection.';
          } else if (error.status === 400) {
            const remainingAttempts = this.MAX_ATTEMPTS - this.loginAttempts;
            if (remainingAttempts > 0) {
              this.errorMessage = `Invalid username or password. ${remainingAttempts} attempt(s) remaining.`;
            } else {
              this.errorMessage = 'Invalid username or password. Account temporarily locked.';
            }
          } else {
            this.errorMessage = 'An error occurred during login. Please try again.';
          }
        }
      );
  }

  clearError(): void {
    this.errorMessage = '';
  }
}
