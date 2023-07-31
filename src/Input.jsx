import React from 'react';

const Input = () => {
	return (
		<form className='w-full text-center'>
			<input
				className='text-lg font-mono w-9/12 rounded-md py-2 text-center px-4 outline-none hover:shadow-xl focus:shadow-xl'
				type='text'
				placeholder='Enter binary number...'
			/>
		</form>
	);
};

export default Input;
