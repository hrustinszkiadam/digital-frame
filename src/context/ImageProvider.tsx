import { useState, type PropsWithChildren } from 'react';
import { ImageContext } from './ImageContext';

const ImageProvider = ({ children }: PropsWithChildren) => {
	const [url, setUrl] = useState('');
	const [width, setWidth] = useState(500);
	const [borderWidth, setBorderWidth] = useState(2);
	const [frameColor, setFrameColor] = useState('#000000');
	const [isValidImage, setIsValidImage] = useState(false);

	return (
		<ImageContext.Provider
			value={{
				url,
				setUrl,
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
