import {
	useDeferredValue,
	useEffect,
	useState,
	type PropsWithChildren,
} from 'react';
import { ImageContext } from '../context/ImageContext';
import { validateImage } from '../utils/validateImage';

const ImageProvider = ({ children }: PropsWithChildren) => {
	const [url, setUrl] = useState('');
	const [width, setWidth] = useState(500);
	const [borderWidth, setBorderWidth] = useState(15);
	const [frameColor, setFrameColor] = useState('#800080');
	const [isValidImage, setIsValidImage] = useState(false);

	const deferredUrl = useDeferredValue(url);

	useEffect(() => {
		const controller = new AbortController();

		const validate = async () => {
			setIsValidImage(await validateImage(deferredUrl, controller.signal));
		};
		validate();

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
