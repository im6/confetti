import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloComponent } from '../hello/hello.component';
import { ColorsComponent } from '../colors/colors.component';
import { TodoComponent } from '../todo/todo.component';
import { TodoDetailComponent } from '../todoDetail/todoDetail.component';

const routes: Routes = [
  {
    path: '',
    component: ColorsComponent,
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
