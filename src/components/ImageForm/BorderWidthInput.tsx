import { useImageContext } from '../../context/ImageContext';
import { handleNumberInput } from '../../utils/handleNumberInput';
import InputGroupWrapper from './InputGroupWrapper';
import Label from './Label';

const BorderWidthInput = () => {
	const { borderWidth, setBorderWidth } = useImageContext();
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
				onChange={(e) => handleNumberInput(e, setBorderWidth)}
			/>
		</InputGroupWrapper>
	);
};

export default BorderWidthInput;
