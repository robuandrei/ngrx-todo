import { Component, OnInit } from '@angular/core';
import { Todo } from './../../common/models/todo';
import { Store } from '@ngrx/store';
import * as Todos from '../../common/store/todos/todos.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Array<Todo>[];
  message: string;
  bgClass: string;
  p: number = 1;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new Todos.GetTodos());
    this.store.select('todos').subscribe(response => {

      this.todos = response.todoList;
      this.message = response.message;
      this.bgClass = response.infoClass;

      setTimeout(() => {
        this.message = '';
      }, 2000);

    }, error => {
      console.log(error);
    });
  }

}
