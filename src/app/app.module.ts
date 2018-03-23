import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HelloComponent } from './modules/hello/hello.component';

@NgModule({
  declarations: [
     HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HelloComponent]
})
export class AppModule { }
