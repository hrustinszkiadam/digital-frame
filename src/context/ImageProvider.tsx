import {
	useDeferredValue,
	useEffect,
	useState,
	type PropsWithChildren,
} from 'react';
import { ImageContext } from './ImageContext';

const ImageProvider = ({ children }: PropsWithChildren) => {
	const [url, setUrl] = useState('');
	const [width, setWidth] = useState(500);
	const [borderWidth, setBorderWidth] = useState(15);
	const [frameColor, setFrameColor] = useState('#800080');
	const [isValidImage, setIsValidImage] = useState(false);

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
	}, [deferredUrl]);

	return (
		<ImageContext.Provider
			value={{
				url,
				setUrl,
				deferredUrl,
				width,
				setWidth,
				borderWidth,
				setBorderWidth,
				frameColor,
				setFrameColor,
				isValidImage,
				setIsValidImage,
			}}
		>
			{children}
		</ImageContext.Provider>
	);
};

export default ImageProvider;
