import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './modules/app/app.component';
import { HelloComponent } from './modules/hello/hello.component';
import { TodoComponent } from './modules/todo/todo.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/hello',
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
    //FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TodoComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
