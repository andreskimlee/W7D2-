import ReactDOM from "react-dom";
import React from 'react';
import rootReducer from './reducers/root_reducer'
import { configureStore } from './store/store.js' // 
import { receiveTodo, receiveTodos } from './actions/todo_actions' // testing purposes 
import Root from './components/root'
import { allTodos } from './reducers/selectors'

document.addEventListener("DOMContentLoaded", () =>{
  // window.rootReducer = rootReducer;
  window.store = configureStore();
  // window.receiveTodo = receiveTodo; 
  // window.receiveTodos = receiveTodos;
  window.allTodos = allTodos; 

  const root = document.getElementById("root"); 
  ReactDOM.render(<Root store={configureStore()} />, root); 
  // ReactDOM.render(<h1>Todos App</h1 >, root)
}) 

