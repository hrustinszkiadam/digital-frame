import BorderWidthInput from './BorderWidthInput';
import FrameColorInput from './FrameColorInput';
import UrlInput from './UrlInput';
import WidthInput from './WidthInput';

const ImageForm = () => {
	return (
		<form className='d-flex flex-column h-100 justify-content-center'>
			<UrlInput />
			<WidthInput />
			<BorderWidthInput />
			<FrameColorInput />
		</form>
	);
};

export default ImageForm;
