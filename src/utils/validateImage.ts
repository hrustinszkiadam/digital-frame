export const validateImage = async (
	url: string,
	controller: AbortController
): Promise<boolean> => {
	if (typeof url !== 'string' || url.trim() === '') {
		return false;
	}

	try {
		const response = await fetch(url, {
			method: 'HEAD',
			signal: controller.signal,
		});
		const contentType = response.headers.get('Content-Type');
		return response.ok && !!contentType && contentType.startsWith('image/');
	} catch {
		return false;
	}
};
