import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { todoData } from './mock';
import { Todo } from '../models/todo';

@Injectable()
export class TodoService {
  constructor() {}
  getTodoListDummy(): Todo[] {
    return todoData;
  }
  getTodoList(): Observable<Todo[]> {
    return of(todoData);
  }
}