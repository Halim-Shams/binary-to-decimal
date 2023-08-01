import React from 'react';

const Numbers = ({binaryNum, decimalNum}) => {
	return (
		<div className='flex gap-4'>
			<p className='font-mono text-2xl text-gray-700'>{binaryNum}</p>
			<p className='text-xl'>{decimalNum && '👉'}</p>
			<p className='font-mono text-2xl font-bold text-gray-800'>{decimalNum}</p>
		</div>
	);
};

export default Numbers;
