import React, { useState } from 'react';
import Border from '../layouts/Border';
import { addTodoHandler } from '../../redux/actions/todoActions';
import { connect } from 'react-redux';
// import * as actionType from '../../redux/actions/actionTypes';

function InputForm({ addHandler, todos }) {
	const [addTodo, setAddTodo] = useState('');

	const handleChange = (event) => {
		setAddTodo(event.target.value);
	};
	const handleSubmit = (event) => {
		const values = {
			todos: [...todos],
			title: addTodo,
		};
		addHandler(values);
		setAddTodo('');
		event.preventDefault();
	};

	return (
		<Border title='Add Todo'>
			<div className='flex gap-2'>
				<input
					className='text-#383e56 w-9/12 flex-shrink-0 border-b-2 border-gray-400 focus:outline-none focus:border-b-2 focus:border-#383e56'
					placeholder='Ex : Build Gundam'
					value={addTodo}
					onChange={handleChange}
				/>
				<input
					className='w-full flex-grow-0 bg-#383e56 text-white rounded cursor-pointer'
					type='submit'
					value='Add Todo'
					onClick={handleSubmit}
				/>
			</div>
		</Border>
	);
}

const mapStateToProps = ({ Todos }) => {
	return { ...Todos };
};

const mapDispatchToProps = (dispatch) => {
	return {
		addHandler: (values) => {
			addTodoHandler(values);
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
