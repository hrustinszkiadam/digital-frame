import { useImageContext } from '../context/ImageContext';

const Image = () => {
	const { deferredUrl, width, borderWidth, frameColor } = useImageContext();

	return (
		<img
			src={deferredUrl}
			alt='Custom image'
			style={{
				width,
				border: `${borderWidth}px solid ${frameColor}`,
			}}
			className='mt-5 p-0 img-fluid'
		/>
	);
};

export default Image;
