import * as actionType from './actionTypes';

// export const getTodos = () => ({
// 	type: actionType.GET_ALL_TODOS,
// });

export const deleteHandler = ({ key, todos }) => {
	const newState = todos.filter((todo, index) => index !== key);
	console.log('newState', newState);

	return {
		type: actionType.DELETE_ID,
		values: newState,
	};
};

export const doneHandler = ({ key, todos }) => {
	const duplicateState = [...todos];
	const values = duplicateState[key];
	const newValues = {
		...values,
		isDone: !values.isDone,
	};

	duplicateState[key] = newValues;

	return {
		type: actionType.CHANGE_DONE,
		values: duplicateState,
	};
};

export const addTodoHandler = ({ todos, title }) => {
	const duplicateState = [...todos];
	const newTodo = {
		title: title,
		isDone: false,
	};

	duplicateState.push(newTodo);

	console.log(duplicateState);

	return {
		type: actionType.ADD_TODO,
		values: duplicateState,
	};
};