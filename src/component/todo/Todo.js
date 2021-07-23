import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { connect } from 'react-redux';
import { deleteHandler, doneHandler } from '../../redux/actions/todoActions';

function Todo({ todos, doneHandler, title, checked, id }) {
	// const [isChecked, setisChecked] = useState(false);
	// console.log(id);
	// console.log(todos);

	// console.log(todos, 'ini todos');
	const handleCheckButton = () => {
		const values = {
			todos: [...todos],
			key: id,
		};
		doneHandler(values);
	};

	const handleDelete = () => {
		const values = {
			todos: [...todos],
			key: id,
		};

		deleteHandler(values);
	};

	return (
		<div
			className={`flex py-2 mb-1 px-1 border-b border-gray-300${
				checked ? ' bg-gray-300 text-gray-500 border-gray-500 ' : ''
			}`}
		>
			<div
				className={`w-10/12 flex-grow-0 flex-shrink-0 ${
					checked ? 'line-through' : ''
				}`}
			>
				<span>{title} </span>
			</div>
			<div className='flex items-center justify-center flex-shrink-0 flex-grow-0 w-2/12 pl-1'>
				<span
					onClick={handleDelete}
					className='cursor-pointer inline-block mx-2 text-redDanger'
				>
					<FaTrash />
				</span>
				<span
					onClick={handleCheckButton}
					className={`cursor-pointer inline-block mx-2 text-2xl ${
						checked ? 'text-redDanger' : 'text-greenDone'
					}`}
				>
					{checked ? <AiOutlineClose /> : <AiOutlineCheck />}
				</span>
			</div>
		</div>
	);
}

const mapStateToProps = ({ Todos }) => {
	return { ...Todos };
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteHandler: (values) => {
			dispatch(deleteHandler(values));
		},
		doneHandler: (values) => {
			dispatch(doneHandler(values));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
