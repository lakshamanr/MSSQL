import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrismModule } from '@ngx-prism/core';
import { CodeViewerComponent } from './components/code-viewer/code-viewer.component';

@NgModule({
  declarations: [
    CodeViewerComponent
  ],
  imports: [
    CommonModule,
    PrismModule
  ],
  exports: [
    CodeViewerComponent
  ]
})
export class SharedModule { }
