import Image from './components/Image';
import ImageForm from './components/ImageForm/Index';
import ThemeToggler from './components/ThemeToggler';
import ImageProvider from './components/ImageProvider';
import './App.css';

const App = () => {
	return (
		<div className='min-vh-100 p-5 justify-content-between flex-column d-flex container'>
			<ThemeToggler />
			<ImageProvider>
				<div
					className='row h-25 mx-auto'
					id='form-container'
				>
					<ImageForm />
				</div>
				<div className='row h-75 w-100 mx-auto d-flex justify-content-center align-items-center'>
					<Image />
				</div>
			</ImageProvider>
		</div>
	);
};

export default App;
