import { TodosActions, TodosActionType } from './todos.actions';
import { Todo } from '../../models/todo';

export const initialState = {};

export function todosReducer(state = initialState, action: TodosActions) {

  switch (action.type) {

    case TodosActionType.GET_TODOS: {
      return { ...state };
    }

    case TodosActionType.GET_TODOS_SUCCESS: {
      let msgText = '';
      let bgClass = '';

      if (action.payload.length < 1) {
        msgText = 'No data found';
        bgClass = 'bg-danger';
      } else {
        msgText = 'Loading data';
        bgClass = 'bg-info';
      }

      return {
        ...state,
        todoList: action.payload,
        message: msgText,
        infoClass: bgClass
      };
    }

    case TodosActionType.GET_TODOS_FAILED: {
      return { ...state };
    }

    case TodosActionType.ADD_TODO: {
      return {
        ...state, message: '',
        infoClass: ''
      };
    }

    case TodosActionType.ADD_TODO_SUCCESS: {
      const data = state['todoList'].push(action.payload);
      return {
        ...state,
        message: 'New todo added',
        infoClass: 'bg-success'
      };
    }

    case TodosActionType.GET_TODOS_FAILED: {
      return { ...state };
    }

    case TodosActionType.UPDATE_TODO: {
      return {
        ...state,
        message: '',
        infoClass: ''
      };
    }

    case TodosActionType.UPDATE_TODO_SUCCESS: {
      return {
        ...state,
        message: 'Update todo',
        infoClass: 'bg-success'
      };
    }

    case TodosActionType.UPDATE_TODO_FAILED: {
      return { ...state };
    }

    case TodosActionType.DELETE_TODO: {
      const todos = state;
      todos['todoList'].forEach((todo: Todo, i: number) => {
        if (todo.id === action.payload) {
          todos['todoList'].splice(i, 1);
        }
      });

      return {
        ...state,
        message: '',
        infoClass: ''
      };
    }

    case TodosActionType.DELETE_TODO_SUCCESS: {
      return {
        ...state,
        message: 'Todo deleted',
        infoClass: 'bg-warning'
      };
    }

    case TodosActionType.DELETE_TODO_FAILED: {
      return { ...state };
    }

    default: {
      return state;
    }

  }

}
