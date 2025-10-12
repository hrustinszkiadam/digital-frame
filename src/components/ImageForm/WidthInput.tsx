import { useCallback } from 'react';
import { useImageContext } from '../../context/ImageContext';
import { handleNumberInput } from '../../utils/handleNumberInput';
import InputGroupWrapper from './InputGroupWrapper';
import Label from './Label';

const WidthInput = () => {
	const { width, setWidth } = useImageContext();

	const onChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			handleNumberInput(e, setWidth);
		},
		[setWidth]
	);

	return (
		<InputGroupWrapper>
			<Label
				id='widthInput'
				text='Image width (px)'
			/>
			<input
				type='number'
				className='form-control'
				id='widthInput'
				value={width}
				onChange={onChange}
			/>
		</InputGroupWrapper>
	);
};

export default WidthInput;
