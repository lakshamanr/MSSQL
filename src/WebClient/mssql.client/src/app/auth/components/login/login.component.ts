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

  onSubmit(): void {
    this.submitted = true;
    this.errorMessage = '';

    // Stop if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.f.username.value, this.f.password.value)
      .subscribe(
        response => {
          this.loading = false;
          console.log('Login successful:', response);

          // Show elements back before navigating
          this.showElements();

          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.loading = false;
          console.error('Login error:', error);

          // Handle different error scenarios
          if (error.error && error.error.error_description) {
            this.errorMessage = error.error.error_description;
          } else if (error.status === 0) {
            this.errorMessage = 'Unable to connect to the server. Please check your connection.';
          } else if (error.status === 400) {
            this.errorMessage = 'Invalid username or password.';
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
