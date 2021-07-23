import React from 'react';
import { connect } from 'react-redux';
import Border from '../layouts/Border';
import Todo from './Todo';

function TodoListContainer(props) {
	return (
		<Border margin='mt-10' title='Todo List'>
			{props.todos.map((todo, index) => (
				<Todo
					checked={todo.isDone}
					title={todo.title}
					key={index}
					id={index}
				/>
			))}
			{/* <Todo detail='Not Checked' />
			<Todo detail='Checked' checked /> */}
			{/* <div className='w-full h-8 border-b border-gray-300'>
				<span> Not Checked </span>
			</div>
			<div className='w-full h-8 border-b border-gray-300'>
				<span>Checked</span>
			</div> */}
		</Border>
	);
}
const mapStateToProps = ({ Todos }) => {
	return {
		...Todos,
	};
};

// const mapDispatchToProps = (dispatch) => {
// 	return;
// };

export default connect(mapStateToProps, null)(TodoListContainer);
