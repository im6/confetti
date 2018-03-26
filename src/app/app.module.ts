import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TodoService } from './service/todo.service';

import { RoutingComponent } from './modules/routing/routing.component';
import { AppComponent } from './modules/app/app.component';
import { HelloComponent } from './modules/hello/hello.component';
import { TodoComponent } from './modules/todo/todo.component';
import { TodoDetailComponent } from './modules/todoDetail/todoDetail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RoutingComponent,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TodoComponent,
    TodoDetailComponent,
  ],
  providers: [
    TodoService,
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
