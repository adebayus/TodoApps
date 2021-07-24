import React from 'react';

export default function Container({ children }) {
	return (
		<div className='container max-w-xl text-#383e56 w-full mt-16 mx-auto'>
			{children}
		</div>
	);
}
