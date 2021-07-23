// import logo from './logo.svg';
import './App.css';
import Container from './component/layouts/Container';
import TodoContainer from './component/layouts/TodoContainer';

function App() {
	return (
		<Container>
			<div className='w-full bg-white p-3 rounded-md'>
				<h1 className='text-3xl text-center font-bold flex justify-center items-center relative'>
					<span
						style={{
							width: '80px',
							height: '5px',
							background: '#383e56',
							marginTop: '5px',
							marginRight: '10px',
							borderRadius: '5px',
						}}
						className=''
					/>
					Todo List App
					<span
						style={{
							width: '80px',
							height: '5px',
							background: '#383e56',
							marginTop: '5px',
							marginLeft: '10px',
							borderRadius: '5px',
						}}
						className=''
					/>
				</h1>
				<TodoContainer />
			</div>
		</Container>
	);
}

export default App;
