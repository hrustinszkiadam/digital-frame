type ImageProps = {
	url: string;
	width: number;
	borderWidth: number;
	frameColor: string;
};
const Image = ({ url, width, borderWidth, frameColor }: ImageProps) => {
	return (
		<img
			src={url}
			alt='Custom image'
			style={{
				width,
				border: `${borderWidth}px solid ${frameColor}`,
			}}
			className='mt-5 p-0 img-fluid'
		/>
	);
};

export default Image;
