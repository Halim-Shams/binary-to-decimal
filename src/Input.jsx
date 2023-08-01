import {useRef, useState} from 'react';
import {convert} from './convert';

const Input = ({setBinaryNum, setDecimalNum}) => {
	const [binary, setBinary] = useState('');
	const binNumber = useRef(null);

	const handleIndex = (e) => {
		e.preventDefault();
		const toDecimal = convert(binNumber.current.value);
		setDecimalNum(toDecimal);
	};

	return (
		<form onSubmit={handleIndex} className='w-full text-center'>
			<input
				ref={binNumber}
				value={binary}
				onChange={(e) => setBinary(setBinaryNum(e.target.value))}
				className='text-lg font-mono w-9/12 rounded-md py-2 text-center px-4 outline-none hover:shadow-xl focus:shadow-xl'
				type='text'
				placeholder='Enter binary number...'
			/>
		</form>
	);
};

export default Input;
