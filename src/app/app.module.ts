import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './modules/app/app.component';
import { HelloComponent } from './modules/hello/hello.component';
import { TodoComponent } from './modules/todo/todo.component';
import { TodoDetailComponent } from './modules/todo/todoDetail/todoDetail.component';

import { TodoService } from './service/todo.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/todo',
    pathMatch: 'full',
  },
  {
    path: 'hello',
    component: HelloComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
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
  bootstrap: [AppComponent]
})
export class AppModule { }
