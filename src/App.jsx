import Input from './Input';
import Numbers from './Numbers';
// import {Convert} from './Convert';
import {useState} from 'react';

function App() {
	const [binaryNum, setBinaryNum] = useState('');
	const [decimalNum, setDecimalNum] = useState('');

	return (
		<div className='flex flex-col items-center pt-[14rem] gap-14 bg-gradient-to-tl from-yellow-200 h-screen to-yellow-500'>
			<div className='flex flex-col items-center gap-7'>
				<p className='font-bold text-4xl text-gray-700 text-center'>
					Turn Binary to Decimal Number
				</p>
				<Input setDecimalNum={setDecimalNum} setBinaryNum={setBinaryNum} />
			</div>
			<Numbers decimalNum={decimalNum} binaryNum={binaryNum} />
		</div>
	);
}

export default App;
