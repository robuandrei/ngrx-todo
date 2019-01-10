import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { TodosService } from './../../services/todos/todos.service';

import {
  TodosActionType,
  GetTodosSuccess, GetTodosFailed,
  AddTodoSuccess, AddTodoFailed,
  UpdateTodoSuccess, UpdateTodoFailed,
  DeleteTodoSuccess,
  DeleteTodoFailed
} from './todos.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { Todo } from '../../models/todo';

@Injectable()
export class TodosEffects {

  constructor(
    private actions$: Actions,
    private todosService: TodosService
  ) { }

  @Effect()
  getTodos$ = this.actions$.pipe(
    ofType(TodosActionType.GET_TODOS),
    switchMap(() =>
      this.todosService.getAPITodos().pipe(
        map((todos: Array<Todo>) => new GetTodosSuccess(todos)),
        catchError(error => of(new GetTodosFailed(error)))
      )
    )
  );

  @Effect()
  addTodo$ = this.actions$.pipe(
    ofType(TodosActionType.ADD_TODO),
    switchMap((action) =>
      this.todosService.addAPITodo(action['payload']).pipe(
        map((todo: Todo) => new AddTodoSuccess(todo)),
        catchError(error => of(new AddTodoFailed(error)))
      )
    )
  );

  @Effect()
  updateTodo$ = this.actions$.pipe(
    ofType(TodosActionType.UPDATE_TODO),
    switchMap((action) =>
      this.todosService.updateAPITodo(action['payload']).pipe(
        map((todo: Todo) => new UpdateTodoSuccess(todo)),
        catchError(error => of(new UpdateTodoFailed(error)))
      )
    )
  );

  @Effect()
  deleteTodo$ = this.actions$.pipe(
    ofType(TodosActionType.DELETE_TODO),
    switchMap((action) =>
      this.todosService.deleteAPITodo(action['payload']).pipe(
        map((todoId: number) => new DeleteTodoSuccess(todoId)),
        catchError(error => of(new DeleteTodoFailed(error)))
      )
    )
  );

}
