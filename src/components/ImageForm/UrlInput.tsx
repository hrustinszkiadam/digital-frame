import { useCallback } from 'react';
import { useImageContext } from '../../context/ImageContext';
import InputGroupWrapper from './InputGroupWrapper';
import Label from './Label';

const UrlInput = () => {
	const { url, setUrl } = useImageContext();

	const onChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setUrl(e.target.value);
		},
		[setUrl]
	);

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
				onChange={onChange}
			/>
		</InputGroupWrapper>
	);
};

export default UrlInput;
