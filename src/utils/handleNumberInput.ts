export const handleNumberInput = (
	e: React.ChangeEvent<HTMLInputElement>,
	setter: (value: number) => void
) => {
	if (e.target.value.length >= 2 && e.target.value.startsWith('0')) {
		e.target.value = e.target.value.slice(1);
	}
	setter(Number(e.target.value));
};
