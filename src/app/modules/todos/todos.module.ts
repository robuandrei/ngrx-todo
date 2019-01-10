import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodosService } from './common/services/todos/todos.service';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { todosReducer } from './common/store/todos/todos.reducers';
import { TodosEffects } from './common/store/todos/todos.effects';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { storeLogger } from 'ngrx-store-logger';
import { NgxPaginationModule } from 'ngx-pagination';

export function logger(reducer: ActionReducer<any>): any {
  return storeLogger()(reducer);
}

export const metaReducers = [logger];

@NgModule({
  declarations: [TodoListComponent, TodoComponent, AddTodoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('todos', todosReducer, { metaReducers }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([TodosEffects])
  ],
  exports: [TodoListComponent, TodoComponent, AddTodoComponent],
  providers: [TodosService]
})
export class TodosModule { }
