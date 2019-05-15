import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Todo } from './../../models/todo';
import { headers } from '../../headers/headers';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
  }

  getAPITodos() {
    return this.http.get(`${this.baseUrl}/todos`, { headers })
      .pipe(catchError((error: any) => throwError(error.message)));
  }

  addAPITodo(todo: Todo) {
    const sendTodo = {
      'todoName': todo.todoName,
      'todoDescription': todo.todoDescription,
      'todoState': 0
    };

    return this.http.post(
      `${this.baseUrl}/todos`,
      JSON.stringify(sendTodo),
      { headers }
    )
      .pipe(catchError((error: any) => throwError(error.message)));
  }

  updateAPITodo(todo: Todo) {
    return this.http.put(
      `${this.baseUrl}/todos/${todo.id}`,
      JSON.stringify(todo),
      { headers }
    )
      .pipe(catchError((error: any) => throwError(error.message)));

  }

  deleteAPITodo(todoId: number) {
    return this.http.delete(
      `${this.baseUrl}/todos/${todoId}`,
      { headers }
    )
      .pipe(catchError((error: any) => throwError(error.message)));
  }
}
