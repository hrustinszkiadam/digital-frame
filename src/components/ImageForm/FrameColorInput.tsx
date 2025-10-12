import { useCallback } from 'react';
import { useImageContext } from '../../context/ImageContext';
import InputGroupWrapper from './InputGroupWrapper';
import Label from './Label';

const FrameColorInput = () => {
	const { frameColor, setFrameColor } = useImageContext();

	const onChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setFrameColor(e.target.value);
		},
		[setFrameColor]
	);
	return (
		<InputGroupWrapper>
			<Label
				id='frameColorInput'
				text='Frame color'
			/>
			<input
				type='color'
				className='form-control'
				id='frameColorInput'
				value={frameColor}
				onChange={onChange}
			/>
		</InputGroupWrapper>
	);
};

export default FrameColorInput;
