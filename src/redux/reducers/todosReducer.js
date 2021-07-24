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
};

const todosReducers = (state = INITAL_STATE, action) => {
	console.log(action, 'seeaction');
	switch (action.type) {
		case actionType.ADD_TODO:
			return {
				// ...state,
				todos: [...action.values],
			};
		// case actionType.GET_ALL_TODOS:
		// 	return {
		// 		// ...state,
		// 	};
		case actionType.DELETE_ID:
			console.log('klikkilk');
			return {
				// ...state,
				todos: [...action.values],
			};
		case actionType.CHANGE_DONE:
			// console.log('done');
			return {
				// ...state,
				todos: [...action.values],
			};
		default:
			return state;
	}
};

export default todosReducers;
