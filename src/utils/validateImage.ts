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
			headers: {
				'Content-Type': 'image/*',
			},
		});
		const contentType = response.headers.get('Content-Type');
		const res =
			response.ok && !!contentType && contentType.startsWith('image/');
		if (res) {
			console.clear();
		}
		return res;
	} catch {
		return false;
	}
};
