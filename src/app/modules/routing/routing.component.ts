import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloComponent } from '../hello/hello.component';
import { TodoComponent } from '../todo/todo.component';
import { TodoDetailComponent } from '../todoDetail/todoDetail.component';


const routes: Routes = [
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
  {
    path: 'todo/:id',
    component: TodoDetailComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingComponent {
  title = '';
}
