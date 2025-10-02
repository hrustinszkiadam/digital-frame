import { createContext, useContext } from 'react';

type ImageContextType = {
	url: string;
	setUrl: (url: string) => void;
	deferredUrl: string;
	width: number;
	setWidth: (width: number) => void;
	borderWidth: number;
	setBorderWidth: (borderWidth: number) => void;
	frameColor: string;
	setFrameColor: (frameColor: string) => void;
	isValidImage: boolean;
	setIsValidImage: (isValid: boolean) => void;
};

export const ImageContext = createContext<ImageContextType | null>(null);

export const useImageContext = () => {
	const context = useContext(ImageContext);
	if (!context) {
		throw new Error('useImageContext must be used within an ImageProvider');
	}
	return context;
};
