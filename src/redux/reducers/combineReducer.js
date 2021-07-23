import { combineReducers } from 'redux';
import todosReducers from './todosReducer';
// console.log(todosReducers);
const rootReducer = combineReducers({
	Todos: todosReducers,
});

export default rootReducer;
