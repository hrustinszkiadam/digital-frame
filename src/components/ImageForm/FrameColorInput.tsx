import { useImageContext } from '../../context/ImageContext';
import InputGroupWrapper from './InputGroupWrapper';
import Label from './Label';

const FrameColorInput = () => {
	const { frameColor, setFrameColor } = useImageContext();
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
				onChange={(e) => setFrameColor(e.target.value)}
			/>
		</InputGroupWrapper>
	);
};

export default FrameColorInput;
