import { ADD_TODO ,DELETE_TODO,UPDATE_TODO,DELETE_ALL} from "./actionsType";


export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload : todo
  };
};

export const deleteTodo = (todoId) => {
    return {
      type: DELETE_TODO,
      payload : todoId
    };
  };

  
export const updateTodo = (todo) => {
    return {
      type: UPDATE_TODO,
      payload : todo
    };
  };

  export const deleteAll = (todoId) => {
    return {
      type: DELETE_ALL,
      payload : todoId
    };
  };

  