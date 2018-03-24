import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { myData } from './mock';

@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todos = myData;
  selectedTodo: Todo = {
    id: 0,
    name: 'not selected'
  };

  constructor() { }
  ngOnInit() { }
  onSelect(oneTodo: Todo): void {
    this.selectedTodo = oneTodo;
  }
}
