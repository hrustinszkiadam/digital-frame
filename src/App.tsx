import { useDeferredValue, useEffect } from 'react';
import Image from './components/Image';
import ImageForm from './components/ImageForm';
import type { Theme } from './types';
import ThemeToggler from './components/ThemeToggler';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';
import { useImageContext } from './context/ImageContext';

const App = () => {
	const { url, width, borderWidth, frameColor, isValidImage, setIsValidImage } =
		useImageContext();
	const [theme, setTheme] = useLocalStorage<Theme>('theme', 'dark');

	const deferredUrl = useDeferredValue(url);

	useEffect(() => {
		if (typeof deferredUrl !== 'string' || deferredUrl.trim() === '') {
			setIsValidImage(false);
			return;
		}
		const controller = new AbortController();
		const fetchImage = async () => {
			try {
				const response = await fetch(deferredUrl, {
					method: 'HEAD',
					signal: controller.signal,
				});
				const contentType = response.headers.get('Content-Type');
				setIsValidImage(
					response.ok && !!contentType && contentType.startsWith('image/')
				);
			} catch {
				setIsValidImage(false);
			}
		};
		fetchImage();

		return () => {
			setIsValidImage(false);
			controller.abort();
		};
	}, [deferredUrl, setIsValidImage]);

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
				{isValidImage && (
					<Image
						url={deferredUrl}
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
