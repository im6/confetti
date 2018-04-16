import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TodoService } from './service/todo.service';
import { ColorService } from './service/color.service';

import { RoutingComponent } from './modules/routing/routing.component';
import { AppComponent } from './modules/app/app.component';
import { HelloComponent } from './modules/hello/hello.component';
import { ColorsComponent } from './modules/colors/colors.component';
import { TodoComponent } from './modules/todo/todo.component';
import { TodoDetailComponent } from './modules/todoDetail/todoDetail.component';

@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RoutingComponent,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TodoComponent,
    TodoDetailComponent,
    ColorsComponent,
  ],
  providers: [
    TodoService,
    ColorService,
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
