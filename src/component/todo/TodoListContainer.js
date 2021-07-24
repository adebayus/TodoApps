import React from 'react';
import { connect } from 'react-redux';
import Border from '../layouts/Border';
import Todo from './Todo';

function TodoListContainer(props) {
	// console.log(props, 'todolistct');
	const { currentPage, todos, todoPerPage } = props;
	const indexOfLastTodo = currentPage * todoPerPage;
	const indexOfFirstTodo = indexOfLastTodo - todoPerPage;
	const currentTodo = todos.slice(indexOfFirstTodo, indexOfLastTodo);
	console.log(currentTodo, 'currentTodo');
	return (
		<Border margin='mt-10' title='Todo List'>
			<div style={{ height: '225px' }}>
				{currentTodo.map((todo) => (
					<Todo
						checked={todo.isDone}
						title={todo.title}
						key={todo.id}
						id={todo.id}
						todos={todos}
					/>
				))}
			</div>
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
