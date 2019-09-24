import { RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions'
import { merge } from "lodash";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};


const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS: {
      const newState = {};
      for (let i = 0; i < action.todos.length; i++) {
        // a state thats very organized (normalized state) id is the key usually points to the object
        newState[action.todos[i].id] = action.todos[i];
      }
      return newState;
    }
    case RECEIVE_TODO: {
      debugger 
      const { todo } = action;
      const newItem = { [todo.id]: todo };
      return merge({}, state, newItem);
    }
    default:
      return state;
  }
};


export default todosReducer;
