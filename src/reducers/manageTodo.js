import { v4 as uuidv4 } from 'uuid';

export default function manageTodo(state = {
  todos: [],
}, action) {
  // console.log(state)
  switch (action.type) {
    case 'ADD_TODO':
      const todo = {
        id:uuidv4(),
        text:action.payload.text
      }
      return { todos: state.todos.concat(todo) };
    case 'DELETE_TODO':
      // debugger
      return {
        todos:state.todos.filter(todo => todo.id !== action.id)
      }
    default:
      return state;
  }
}
