import React from 'react';

export default function Border({ children, margin, title }) {
	return (
		<div
			className={`relative px-4 pt-4 pb-3 p-b-2 border rounded-sm border-#383e56 ${margin}`}
		>
			<span
				style={{
					transform: 'translate(-1px,-50%)',
					display: 'block',
				}}
				className='absolute inline-block top-0 left-0 bg-white w-max'
			>
				{title}
			</span>
			{children}
		</div>
	);
}
