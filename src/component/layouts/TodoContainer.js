import React from 'react';

import InputForm from '../input-form/InputForm';
import TodoListContainer from '../todo/TodoListContainer';

export default function TodoContainer() {
	return (
		<div className='mt-10'>
			<InputForm />
			<TodoListContainer />
		</div>
	);
}
