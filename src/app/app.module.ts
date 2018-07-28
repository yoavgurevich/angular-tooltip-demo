import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TooltipBtnComponent } from './tooltip-btn/tooltip-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipBtnComponent
  ],
  imports: [
    NgbModule.forRoot(), 
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
