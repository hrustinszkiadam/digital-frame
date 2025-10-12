import sun from '../assets/light.svg';
import moon from '../assets/dark.svg';
import useLocalStorage from '../hooks/useLocalStorage';
import type { Theme } from '../types';
import { useCallback, useEffect, useMemo } from 'react';

const ThemeToggler = () => {
	const [theme, setTheme] = useLocalStorage<Theme>('theme', 'dark');

	const toggleTheme = useCallback(() => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	}, [setTheme]);

	useEffect(() => {
		document.documentElement.setAttribute('data-bs-theme', theme);
	}, [theme]);

	const themeImage = useMemo(
		() =>
			theme === 'light' ? (
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
			),
		[theme]
	);

	return (
		<div className='position-fixed top-0 end-0 m-3'>
			<button
				className='btn'
				onClick={toggleTheme}
				aria-label='Toggle theme'
			>
				{themeImage}
			</button>
		</div>
	);
};

export default ThemeToggler;
