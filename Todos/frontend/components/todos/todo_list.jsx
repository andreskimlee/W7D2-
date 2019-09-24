import React from 'react'
import TodoForm from './todo_form'
import { receiveTodo } from '../../actions/todo_actions'
import IdGen from "../../util/util"


export const ListItems = (props) => { 
    return (
      <ul>  
        <TodoForm receiveTodo={receiveTodo}/> 
        {props.todos.map(todo => <li key={IdGen()}>{todo.title}</li>)}
      </ul>
    ) 
  }

// module.exports = () => <h3>Todo List goes here!</h3>

