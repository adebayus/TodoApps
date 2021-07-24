import React from 'react';
import { connect } from 'react-redux';
import Border from '../layouts/Border';
import Todo from './Todo';

function TodoListContainer(props) {
	console.log(props, 'todolistct');
	return (
		<Border margin='mt-10' title='Todo List'>
			<div style={{ height: '225px' }}>
				{props.todos.map((todo, index) => (
					<Todo
						checked={todo.isDone}
						title={todo.title}
						key={todo.id}
						id={todo.id}
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
