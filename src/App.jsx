import Input from './Input';

function App() {
	return (
		<div className='flex flex-col items-center gap-6 bg-gradient-to-tl from-yellow-200 h-screen to-yellow-500'>
			<div className='pt-12 flex flex-col items-center gap-6'>
				<p className='font-bold text-4xl text-gray-700 text-center'>
					Turn Binary to Decimal Number
				</p>
				<Input />
			</div>
		</div>
	);
}

export default App;
