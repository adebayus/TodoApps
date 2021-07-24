import * as actionType from '../actions/actionTypes';

const INITAL_STATE = {
	todos: [
		{
			title: 'Build Som Gundam',
			isDone: true,
			id: 1,
		},
		{
			title: 'get Some Job',
			isDone: false,
			id: 2,
		},
	],
	currentPage: 1,
	todoPerPage: 5,
};

const todosReducers = (state = INITAL_STATE, action) => {
	// console.log(action, 'seeaction');
	switch (action.type) {
		case actionType.ADD_TODO:
			return {
				...state,
				todos: [...action.values],
			};
		case actionType.DELETE_ID:
			return {
				...state,
				todos: [...action.values],
			};
		case actionType.CHANGE_DONE:
			// console.log('done');
			return {
				...state,
				todos: [...action.values],
			};
		case actionType.NEXT_PAGE || actionType.PREV_PAGE:
			return {
				...state,
				currentPage: action.values,
			};
		case actionType.PREV_PAGE:
			return {
				...state,
				currentPage: action.values,
			};

		default:
			return state;
	}
};

export default todosReducers;
