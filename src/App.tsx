import { useEffect } from 'react';
import Image from './components/Image';
import ImageForm from './components/ImageForm';
import type { Theme } from './types';
import ThemeToggler from './components/ThemeToggler';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';
import { useImageContext } from './context/ImageContext';

const App = () => {
	const { isValidImage } = useImageContext();
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
			<div
				className='row h-25 mx-auto'
				id='form-container'
			>
				<ImageForm />
			</div>
			<div className='row h-75 w-100 mx-auto d-flex justify-content-center align-items-center'>
				{isValidImage && <Image />}
			</div>
		</div>
	);
};

export default App;
