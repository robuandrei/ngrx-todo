import { Component, OnInit, Input } from '@angular/core';
import { Todo } from './../../common/models/todo';
import { Store } from '@ngrx/store';
import * as Todos from '../../common/store/todos/todos.actions';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  editable: number;

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  changeState(todo: Todo) {

    if (todo.todoState === 1) {
      todo.todoState = 0;
    } else {
      todo.todoState = 1;
      this.editable = -1;
    }

    this.store.dispatch(new Todos.UpdateTodo(todo));
  }

  deleteTodo(todoId: number) {
    this.store.dispatch(new Todos.DeleteTodo(todoId));
  }

  editableTodo(todoId: number) {
    this.editable = todoId;
  }

  editTodo(todo) {
    this.editable = -1;
    this.store.dispatch(new Todos.UpdateTodo(todo));
  }

}
