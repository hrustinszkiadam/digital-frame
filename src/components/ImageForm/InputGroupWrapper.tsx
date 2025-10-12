import { memo, type PropsWithChildren } from 'react';

const InputGroupWrapper = ({ children }: PropsWithChildren) => {
	return (
		<div className='mb-3 input-group gap-3 row-cols-md-auto row-cols-1'>
			{children}
		</div>
	);
};

export default memo(InputGroupWrapper);
