import { useImageContext } from '../../context/ImageContext';
import InputGroupWrapper from './InputGroupWrapper';
import Label from './Label';

const UrlInput = () => {
	const { url, setUrl } = useImageContext();
	return (
		<InputGroupWrapper>
			<Label
				id='urlInput'
				text='URL to image'
			/>
			<input
				type='url'
				className='form-control'
				id='urlInput'
				value={url}
				onChange={(e) => setUrl(e.target.value)}
			/>
		</InputGroupWrapper>
	);
};

export default UrlInput;
