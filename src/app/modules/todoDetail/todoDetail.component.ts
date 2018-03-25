import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TodoService }  from '../../service/todo.service';
import { Todo } from '../../models/todo';

@Component({
  templateUrl: './todoDetail.component.html',
})

export class TodoDetailComponent implements OnInit {
  todo:Todo;
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) {}
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getTodoDetail(id)
      .subscribe(todo => this.todo = todo);
  }
  goBack(): void {
    this.location.back();
  }
}
