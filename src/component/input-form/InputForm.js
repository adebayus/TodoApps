import React, { useState } from 'react';
import Border from '../layouts/Border';
import { addTodoHandler } from '../../redux/actions/todoActions';
import { connect } from 'react-redux';
// import * as actionType from '../../redux/actions/actionTypes';

function InputForm({ addHandler, todos }) {
	const [addTodo, setAddTodo] = useState('');

	const handleChange = (e) => {
		setAddTodo(e.target.value);
		console.log(addTodo);
	};
	const handleSubmit = (e, addTodo, todos) => {
		const values = {
			todos: [...todos],
			title: addTodo,
		};
		addHandler(values);
		setAddTodo('');
		e.preventDefault();
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
					onClick={(e) => handleSubmit(e, addTodo, todos)}
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
			dispatch(addTodoHandler(values));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
