# Authentication Usage Examples

## 📚 Common Usage Patterns

### 1. Protecting a Route

```typescript
// app.module.ts or your routing module
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]  // ✅ Route is now protected
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]  // ✅ Only authenticated users
  }
];
```

### 2. Check Authentication Status in Component

```typescript
// any.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

export class AnyComponent implements OnInit {
  isLoggedIn = false;
  
  constructor(private authService: AuthService) {}
  
  ngOnInit() {
    // Subscribe to authentication state
    this.authService.isAuthenticated.subscribe(isAuth => {
      this.isLoggedIn = isAuth;
      if (isAuth) {
        console.log('User is logged in!');
      } else {
        console.log('User is not logged in');
      }
    });
  }
}
```

```html
<!-- any.component.html -->
<div *ngIf="isLoggedIn">
  <p>Welcome! You are logged in.</p>
</div>

<div *ngIf="!isLoggedIn">
  <p>Please <a routerLink="/login">login</a> to continue.</p>
</div>
```

### 3. Get Current User Information

```typescript
// user-profile.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { User } from './auth/models/user.model';

export class UserProfileComponent implements OnInit {
  currentUser: User | null = null;
  
  constructor(private authService: AuthService) {}
  
  ngOnInit() {
    // Subscribe to current user
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      console.log('User ID:', user?.id);
      console.log('Username:', user?.userName);
      console.log('Email:', user?.email);
      console.log('Roles:', user?.roles);
    });
    
    // Or get synchronously (snapshot)
    const user = this.authService.currentUserValue;
    if (user) {
      console.log('Current user (sync):', user.userName);
    }
  }
}
```

```html
<!-- user-profile.component.html -->
<div *ngIf="currentUser">
  <h2>User Profile</h2>
  <p><strong>Name:</strong> {{ currentUser.fullName || currentUser.userName }}</p>
  <p><strong>Email:</strong> {{ currentUser.email }}</p>
  <p><strong>Job Title:</strong> {{ currentUser.jobTitle || 'N/A' }}</p>
  <p><strong>Roles:</strong> {{ currentUser.roles?.join(', ') }}</p>
</div>
```

### 4. Manual Login (Programmatic)

```typescript
// custom-login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';

export class CustomLoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        response => {
          console.log('Login successful!', response);
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.error('Login failed:', error);
          this.errorMessage = 'Invalid username or password';
        }
      );
  }
}
```

### 5. Manual Logout

```typescript
// any.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';

export class AnyComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  logout() {
    // Clear all auth data
    this.authService.logout();
    
    // Redirect to login
    this.router.navigate(['/login']);
    
    // Optional: Show a message
    console.log('You have been logged out');
  }
}
```

### 6. Show/Hide UI Based on Authentication

```html
<!-- navigation.component.html -->
<nav>
  <!-- Show only when NOT authenticated -->
  <a *ngIf="!(authService.isAuthenticated | async)" routerLink="/login">
    Login
  </a>
  
  <!-- Show only when authenticated -->
  <div *ngIf="authService.isAuthenticated | async">
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/profile">Profile</a>
    <button (click)="logout()">Logout</button>
  </div>
</nav>
```

```typescript
// navigation.component.ts
export class NavigationComponent {
  constructor(public authService: AuthService) {}  // ✅ public for template
  
  logout() {
    this.authService.logout();
  }
}
```

### 7. Making Authenticated API Requests

```typescript
// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:5000/api';
  
  constructor(private http: HttpClient) {}
  
  // ✅ AuthInterceptor automatically adds Authorization header
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/data`);
  }
  
  createData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/data`, data);
  }
  
  updateData(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/data/${id}`, data);
  }
  
  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/data/${id}`);
  }
}
```

### 8. Role-Based Access Control

```typescript
// role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const requiredRoles = route.data['roles'] as string[];
    const user = this.authService.currentUserValue;
    
    if (!user || !user.roles) {
      this.router.navigate(['/login']);
      return false;
    }
    
    const hasRole = requiredRoles.some(role => user.roles?.includes(role));
    
    if (!hasRole) {
      this.router.navigate(['/unauthorized']);
      return false;
    }
    
    return true;
  }
}
```

```typescript
// app.module.ts - Using the role guard
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['Admin'] }  // ✅ Only Admin role can access
  },
  {
    path: 'moderator',
    component: ModeratorComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['Admin', 'Moderator'] }  // ✅ Admin OR Moderator
  }
];
```

### 9. Show/Hide UI Based on Roles

```typescript
// role.directive.ts - Custom directive for role-based UI
import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit {
  @Input() appHasRole: string[] = [];
  
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {}
  
  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      if (this.hasRole(user?.roles)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
  
  private hasRole(userRoles: string[] | undefined): boolean {
    if (!userRoles) return false;
    return this.appHasRole.some(role => userRoles.includes(role));
  }
}
```

```html
<!-- Usage of role directive -->
<button *appHasRole="['Admin']" (click)="deleteUser()">
  Delete User
</button>

<div *appHasRole="['Admin', 'Moderator']">
  <h3>Moderation Panel</h3>
  <!-- Only visible to Admin or Moderator -->
</div>
```

### 10. Handle Token Expiration

```typescript
// The AuthInterceptor handles this automatically!
// But if you need manual control:

import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';

export class MyComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  ngOnInit() {
    // Check if token is expired
    if (this.authService.isTokenExpired()) {
      console.log('Token is expired, attempting refresh...');
      
      this.authService.refreshToken().subscribe(
        () => {
          console.log('Token refreshed successfully');
        },
        error => {
          console.log('Refresh failed, logging out');
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      );
    }
  }
}
```

### 11. Custom HTTP Error Handler

```typescript
// error-handler.service.ts
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}
  
  handleError(error: HttpErrorResponse): string {
    if (error.status === 401) {
      // Unauthorized - token expired or invalid
      this.authService.logout();
      this.router.navigate(['/login']);
      return 'Your session has expired. Please login again.';
    }
    
    if (error.status === 403) {
      // Forbidden - insufficient permissions
      return 'You do not have permission to perform this action.';
    }
    
    if (error.status === 0) {
      // Network error
      return 'Unable to connect to the server. Please check your connection.';
    }
    
    return error.error?.message || 'An unexpected error occurred.';
  }
}
```

### 12. Preload User on App Startup

```typescript
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
  
  ngOnInit() {
    // If token exists in localStorage, load current user
    if (this.authService.getToken() && !this.authService.isTokenExpired()) {
      this.authService.loadCurrentUser().subscribe(
        user => {
          console.log('User loaded on startup:', user);
        },
        error => {
          console.log('Failed to load user, logging out');
          this.authService.logout();
        }
      );
    }
  }
}
```

## 🔧 Testing Examples

### Unit Test - Login Component

```typescript
// login.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;
  
  beforeEach(() => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });
  
  it('should login successfully', () => {
    const mockResponse = {
      access_token: 'mock-token',
      token_type: 'Bearer',
      expires_in: 3600
    };
    
    authService.login.and.returnValue(of(mockResponse));
    
    component.loginForm.patchValue({
      username: 'testuser',
      password: 'password123'
    });
    
    component.onSubmit();
    
    expect(authService.login).toHaveBeenCalledWith('testuser', 'password123');
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
  
  it('should handle login error', () => {
    authService.login.and.returnValue(throwError({ status: 400 }));
    
    component.loginForm.patchValue({
      username: 'testuser',
      password: 'wrongpassword'
    });
    
    component.onSubmit();
    
    expect(component.errorMessage).toBeTruthy();
    expect(router.navigate).not.toHaveBeenCalled();
  });
});
```

---

## 📝 Summary

The authentication system provides:

✅ **Easy Integration** - Just use AuthGuard on routes  
✅ **Automatic Token Management** - AuthInterceptor handles everything  
✅ **Reactive State** - RxJS Observables for real-time updates  
✅ **Type Safety** - Full TypeScript support with models  
✅ **Error Handling** - Built-in error management  
✅ **Role-Based Access** - Support for role checking  

**Start using it now!** Navigate to `/#/login` and enter your credentials.
