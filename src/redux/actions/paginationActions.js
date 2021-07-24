import * as actionType from './actionTypes';

export const prevHandler = (currentPage) => {
	return {
		type: actionType.PREV_PAGE,
		values: currentPage - 1,
	};
};

export const nextHandler = (currentPage) => {
	return {
		type: actionType.NEXT_PAGE,
		values: currentPage + 1,
	};
};
