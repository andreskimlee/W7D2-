import { combineReducers } from 'redux';
import  todosReducer  from './todos_reducer'

const rootReducer = combineReducers({todos: todosReducer}) // demands an object as an argument 

export default rootReducer;

// when exporting multiple you would use with { named exports } 
// default only one exp. 
