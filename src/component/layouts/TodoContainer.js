import React from 'react';

import InputForm from '../input-form/InputForm';
import PaginationContainer from '../pagination/PaginationContainer';
import TodoListContainer from '../todo/TodoListContainer';

export default function TodoContainer() {
	return (
		<div className='mt-10'>
			<InputForm />
			<TodoListContainer />
			<PaginationContainer />
		</div>
	);
}
