import { connect } from 'react-redux';
import { ListItems } from './todo_list';
import { receiveTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors.js';

 const msp = state => ({
  todos: allTodos(state)
})

 const mdp = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
}); 

export default connect(msp, mdp)(ListItems)