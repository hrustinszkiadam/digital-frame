import { useCallback } from 'react';
import { useImageContext } from '../../context/ImageContext';
import { handleNumberInput } from '../../utils/handleNumberInput';
import InputGroupWrapper from './InputGroupWrapper';
import Label from './Label';

const BorderWidthInput = () => {
	const { borderWidth, setBorderWidth } = useImageContext();

	const onChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			handleNumberInput(e, setBorderWidth);
		},
		[setBorderWidth]
	);
	return (
		<InputGroupWrapper>
			<Label
				id='borderWidthInput'
				text='Border width (px)'
			/>
			<input
				type='number'
				className='form-control'
				id='borderWidthInput'
				value={borderWidth}
				onChange={onChange}
			/>
		</InputGroupWrapper>
	);
};

export default BorderWidthInput;
