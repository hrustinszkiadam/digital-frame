import { useImageContext } from '../../context/ImageContext';
import { handleNumberInput } from '../../utils/handleNumberInput';
import InputGroupWrapper from './InputGroupWrapper';
import Label from './Label';

const WidthInput = () => {
	const { width, setWidth } = useImageContext();
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
				onChange={(e) => handleNumberInput(e, setWidth)}
			/>
		</InputGroupWrapper>
	);
};

export default WidthInput;
