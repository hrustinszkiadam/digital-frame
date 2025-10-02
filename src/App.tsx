import Image from './components/Image';
import ImageForm from './components/ImageForm/Index';
import ThemeToggler from './components/ThemeToggler';
import useLocalStorage from './hooks/useLocalStorage';
import ImageProvider from './context/ImageProvider';
import { useEffect } from 'react';
import type { Theme } from './types';
import './App.css';

const App = () => {
	const [theme, setTheme] = useLocalStorage<Theme>('theme', 'dark');

	useEffect(() => {
		document.documentElement.setAttribute('data-bs-theme', theme);
	}, [theme]);

	return (
		<div className='min-vh-100 p-5 justify-content-between flex-column d-flex container'>
			<ThemeToggler
				theme={theme}
				toggleTheme={() =>
					setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
				}
			/>
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
