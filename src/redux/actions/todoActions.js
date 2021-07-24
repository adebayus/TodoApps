import * as actionType from './actionTypes';

// export const getTodos = () => ({
// 	type: actionType.GET_ALL_TODOS,
// });

export const deleteHandler = ({ key, todos }) => {
	const newState = todos.filter((todo) => todo.id !== key);
	console.log('newState', newState);

	return {
		type: actionType.DELETE_ID,
		values: newState,
	};
};

export const doneHandler = ({ key, todos }) => {
	const duplicateState = [...todos];
	const findIndex = duplicateState.findIndex((todo) => todo.id === key);
	const values = duplicateState[findIndex];
	console.log(values, 'asdsa');
	const newValues = {
		...values,
		isDone: !values.isDone,
	};

	duplicateState[findIndex] = newValues;

	return {
		type: actionType.CHANGE_DONE,
		values: duplicateState,
	};
};

export const addTodoHandler = ({ todos, title }) => {
	const duplicateState = [...todos];
	const randomID = Math.round(Math.random() * 1000);
	// const isIdUsed = duplicateState.((todo) => todo.id === randomID);

	// console.log(isIdUsed, randomID, 'random');

	const newTodo = {
		title: title,
		isDone: false,
		id: randomID,
	};

	duplicateState.push(newTodo);

	console.log(duplicateState);

	return {
		type: actionType.ADD_TODO,
		values: duplicateState,
	};
};
