import { useEffect, useState } from 'react';
import Image from './components/Image';
import ImageForm from './components/ImageForm';
import type { Theme } from './types';
import ThemeToggler from './components/ThemeToggler';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

const App = () => {
	const [url, setUrl] = useState('');
	const [width, setWidth] = useState(500);
	const [borderWidth, setBorderWidth] = useState(2);
	const [frameColor, setFrameColor] = useState('#000000');
	const [isValidImage, setIsValidImage] = useState(false);
	const [theme, setTheme] = useLocalStorage<Theme>('theme', 'dark');

	useEffect(() => {
		if (!url) return;
		const fetchImage = async () => {
			try {
				const response = await fetch(url, { method: 'HEAD' });
				const contentType = response.headers.get('Content-Type');
				setIsValidImage(
					response.ok && !!contentType && contentType.startsWith('image/')
				);
			} catch {
				setIsValidImage(false);
			}
		};
		fetchImage();
	}, [url]);

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
				<ImageForm
					url={url}
					setUrl={setUrl}
					width={width}
					setWidth={setWidth}
					borderWidth={borderWidth}
					setBorderWidth={setBorderWidth}
					frameColor={frameColor}
					setFrameColor={setFrameColor}
				/>
			</div>
			<div className='row h-75 w-100 mx-auto d-flex justify-content-center align-items-center'>
				{isValidImage && (
					<Image
						url={url}
						width={width}
						borderWidth={borderWidth}
						frameColor={frameColor}
					/>
				)}
			</div>
		</div>
	);
};

export default App;
