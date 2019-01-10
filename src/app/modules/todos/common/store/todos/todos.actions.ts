import { Action } from '@ngrx/store';
import { Todo } from '../../models/todo';


export enum TodosActionType {
  GET_TODOS = 'GET_TODOS',
  GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS',
  GET_TODOS_FAILED = 'GET_TODOS_FAILED',
  ADD_TODO = 'ADD_TODO',
  ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS',
  ADD_TODO_FAILED = 'ADD_TODO_FAILED',
  UPDATE_TODO = 'UPDATE_TODO',
  UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS',
  UPDATE_TODO_FAILED = 'UPDATE_TODO_FAILED',
  DELETE_TODO = 'DELETE_TODO',
  DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',
  DELETE_TODO_FAILED = 'DELETE_TODO_FAILED'
}

export class GetTodos implements Action {
  readonly type = TodosActionType.GET_TODOS;
}

export class GetTodosSuccess implements Action {
  readonly type = TodosActionType.GET_TODOS_SUCCESS;
  constructor(public payload: Array<Todo>) { }
}

export class GetTodosFailed implements Action {
  readonly type = TodosActionType.GET_TODOS_FAILED;
  constructor(public payload: string) { }
}

export class AddTodo implements Action {
  readonly type = TodosActionType.ADD_TODO;
  constructor(public payload: Todo) { }
}

export class AddTodoSuccess implements Action {
  readonly type = TodosActionType.ADD_TODO_SUCCESS;
  constructor(public payload: Todo) { }
}

export class AddTodoFailed implements Action {
  readonly type = TodosActionType.ADD_TODO_FAILED;
  constructor(public payload: string) { }
}

export class UpdateTodo implements Action {
  readonly type = TodosActionType.UPDATE_TODO;
  constructor(public payload: Todo) { }
}

export class UpdateTodoSuccess implements Action {
  readonly type = TodosActionType.UPDATE_TODO_SUCCESS;
  constructor(public payload: Todo) { }
}

export class UpdateTodoFailed implements Action {
  readonly type = TodosActionType.UPDATE_TODO_FAILED;
  constructor(public payload: string) { }
}

export class DeleteTodo implements Action {
  readonly type = TodosActionType.DELETE_TODO;
  constructor(public payload: number) { }
}

export class DeleteTodoSuccess implements Action {
  readonly type = TodosActionType.DELETE_TODO_SUCCESS;
  constructor(public payload: number) { }
}

export class DeleteTodoFailed implements Action {
  readonly type = TodosActionType.DELETE_TODO_FAILED;
  constructor(public payload: string) { }
}

export type TodosActions = GetTodos |
  GetTodosSuccess |
  GetTodosFailed |
  AddTodo |
  AddTodoSuccess |
  AddTodoFailed |
  UpdateTodo |
  UpdateTodoSuccess |
  UpdateTodoFailed |
  DeleteTodo |
  DeleteTodoSuccess |
  DeleteTodoFailed;
