export const validateImage = async (
	url: string,
	signal: AbortSignal
): Promise<boolean> => {
	if (typeof url !== 'string' || url.trim() === '') {
		return false;
	}

	try {
		const response = await fetch(url, {
			method: 'HEAD',
			signal,
		});
		const contentType = response.headers.get('Content-Type');
		return response.ok && !!contentType && contentType.startsWith('image/');
	} catch {
		return false;
	}
};
