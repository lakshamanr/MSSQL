import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrismModule } from '@ngx-prism/core';
import { CodeViewerComponent } from './components/code-viewer/code-viewer.component';

// Import Amexio modules once here to share across all modules
import { AmexioChartsModule, AmexioDataModule, AmexioEnterpriseModule, AmexioWidgetModule } from 'amexio-ng-extensions';

@NgModule({
  declarations: [
    CodeViewerComponent
  ],
  imports: [
    CommonModule,
    PrismModule,
    AmexioDataModule,
    AmexioWidgetModule,
    AmexioChartsModule,
    AmexioEnterpriseModule
  ],
  exports: [
    CodeViewerComponent,
    // Re-export Amexio modules so feature modules can use them
    AmexioDataModule,
    AmexioWidgetModule,
    AmexioChartsModule,
    AmexioEnterpriseModule
  ]
})
export class SharedModule { }
