import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Third-party UI Libraries
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { AngularSplitModule } from 'angular-split';

// PrimeNG Modules (only those needed in app.module components)
import { MessageService } from 'primeng/api';
import { TreeDragDropService } from 'primeng/api';

// NGX-UI-Loader
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderConfig } from 'ngx-ui-loader';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Application Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { MainPageComponent } from './ui/main-page/main-page.component';
import { LeftmenuComponent } from './left-menu/components/left-menu/leftmenu.component';
import { DatabaseSelectorComponent } from './database/components/database-selector/database-selector.component';

// Auth Module (keep for login component and guards)
import { AuthModule } from './auth/auth.module';
import { AuthInterceptor } from './auth/interceptors/auth.interceptor';
import { SharedModule } from './shared/shared.module';

// NGX-UI-Loader Configuration
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#1c749a',
  bgsOpacity: 0.7,
  bgsPosition: 'center-center',
  bgsSize: 80,
  bgsType: 'ball-spin-clockwise',
  blur: 5,
  delay: 0,
  fgsColor: '#1c749a',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'ball-spin-clockwise',
  gap: 10,
  logoPosition: 'center-center',
  logoSize: 120,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: 'red',
  pbDirection: 'ltr',
  pbThickness: 1,
  hasProgressBar: true,
  text: 'Loading',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  maxTime: -1,
  minTime: 300
};

// Routes are now defined in app-routing.module.ts


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    LeftmenuComponent,
    DatabaseSelectorComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // Third-Party UI Libraries
    NgbModule,
    ModalModule.forRoot(),
    AngularMultiSelectModule,
    AngularSplitModule.forRoot(),

    // NGX-UI-Loader
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule,

    // Shared Module
    SharedModule,

    // Auth Module (for login component and guards)
    AuthModule,

    // App Routing Module - MUST BE LAST (feature modules now lazy loaded)
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    TreeDragDropService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
