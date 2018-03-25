import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'todo-detail',
  templateUrl: './todoDetail.component.html',
})

export class TodoDetailComponent implements OnInit {
  @Input() todo: Todo;
  constructor() { }
  ngOnInit() { }
}
