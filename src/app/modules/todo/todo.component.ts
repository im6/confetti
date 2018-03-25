import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../service/todo.service';

@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todos = [];
  selectedTodo: Todo = {
    id: 0,
    name: null
  };
  constructor(private todoService: TodoService) {
    // should do nothing
  }
  ngOnInit() {
    //this.todos = this.todoService.getTodoListDummy()
    this.todoService.getTodoList()
      .subscribe(todos => {
        this.todos = todos;
      });
  }

  onSelect(oneTodo: Todo): void {
    this.selectedTodo = oneTodo;
  }
}
