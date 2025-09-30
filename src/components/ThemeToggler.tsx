import type { Theme } from '../types';
import sun from '../assets/light.svg';
import moon from '../assets/dark.svg';

type ThemeTogglerProps = {
	theme: Theme;
	toggleTheme: () => void;
};
const ThemeToggler = ({ theme, toggleTheme }: ThemeTogglerProps) => {
	return (
		<div className='position-fixed top-0 end-0 m-3'>
			<button
				className='btn'
				onClick={toggleTheme}
				aria-label='Toggle theme'
			>
				{theme === 'light' ? (
					<img
						src={moon}
						alt='Switch to dark mode'
						width='32'
						height='32'
					/>
				) : (
					<img
						src={sun}
						alt='Switch to light mode'
						width='32'
						height='32'
					/>
				)}
			</button>
		</div>
	);
};

export default ThemeToggler;
