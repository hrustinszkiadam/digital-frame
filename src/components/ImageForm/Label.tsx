import { memo } from 'react';

type LabelProps = {
	id: string;
	text: string;
};
const Label = ({ id, text }: LabelProps) => {
	return (
		<label
			htmlFor={id}
			className='form-label'
		>
			{text}
		</label>
	);
};

export default memo(Label);
