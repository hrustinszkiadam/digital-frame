import { useImageContext } from '../context/ImageContext';
import InputGroupWrapper from './InputGroupWrapper';
import Label from './Label';

const ImageForm = () => {
	const {
		url,
		setUrl,
		width,
		setWidth,
		borderWidth,
		setBorderWidth,
		frameColor,
		setFrameColor,
	} = useImageContext();

	const handleNumberInput = (
		e: React.ChangeEvent<HTMLInputElement>,
		setter: (value: number) => void
	) => {
		if (e.target.value.length >= 2 && e.target.value.startsWith('0')) {
			e.target.value = e.target.value.slice(1);
		}
		setter(Number(e.target.value));
	};
	return (
		<form className='d-flex flex-column h-100 justify-content-center'>
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
		</form>
	);
};

export default ImageForm;
