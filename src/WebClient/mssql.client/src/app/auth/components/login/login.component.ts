import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMessage: string = '';

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
