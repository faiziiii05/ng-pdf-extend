import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
