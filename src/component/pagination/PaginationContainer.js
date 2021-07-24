import React from 'react';
import Border from '../layouts/Border';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { connect } from 'react-redux';
import {
	nextHandler,
	prevHandler,
} from '../../redux/actions/paginationActions';

function PaginationContainer(props) {
	const { currentPage, todos, todoPerPage } = props;
	const indexLastPage = Math.ceil(todos.length / todoPerPage);
	console.log(props, 'index LastPage');

	const handlePrevPage = (currentPage) => {
		props.prev(currentPage);
	};
	const handleNextPage = (currentPage) => {
		props.next(currentPage);
	};
	return (
		<Border margin='mt-5 flex justify-between'>
			<div className='justify-center flex flex-shrink-0 flex-grow-0 w-2/12'>
				<span
					onClick={() => handlePrevPage(currentPage)}
					className={`text-2xl ${
						currentPage === 1
							? 'pointer-events-none text-gray-400'
							: 'cursor-pointer'
					}`}
				>
					{' '}
					<AiOutlineArrowLeft />{' '}
				</span>
			</div>
			<div className='justify-center flex flex-shrink-0 flex-grow-0 w-7/12'>
				<span
					className='bg-#383e56 h-full text-white flex justify-center items-center'
					style={{
						borderRadius: '100%',
						width: '24px',
					}}
				>
					{currentPage}
				</span>
				{/* text-xl font-bold leading-5 */}
			</div>
			<div className='justify-center flex flex-shrink-0 flex-grow-0 w-2/12'>
				<span
					onClick={() => handleNextPage(currentPage)}
					className={`text-2xl ${
						currentPage === indexLastPage
							? 'pointer-events-none text-gray-400'
							: 'cursor-pointer'
					}`}
				>
					{' '}
					<AiOutlineArrowRight />{' '}
				</span>
			</div>
		</Border>
	);
}

const mapStateToProps = ({ Todos }) => {
	return {
		...Todos,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		next: (values) => {
			dispatch(nextHandler(values));
		},
		prev: (values) => {
			dispatch(prevHandler(values));
		},
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PaginationContainer);
