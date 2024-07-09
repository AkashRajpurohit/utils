/**
 * Utility functions for HTTP requests.
 */

/**
 * Adds the appropriate protocol (http or https) to the given URL
 * based on whether the URL contains the string 'localhost'.
 * @param {string} url - The URL to modify.
 * @returns {string} A new URL string with the appropriate protocol added.
 */
export const addHttp = (url?: string): string => {
	return url ? `${url.includes('localhost') ? 'http' : 'https'}://${url}` : '';
};

/**
 * Removes the protocol from the given URL string.
 * @param {string} url - The URL string to modify.
 * @returns {string} A new URL string with the protocol removed.
 */
export const removeHttp = (url?: string): string => {
	return url ? url.replace(/^https?:\/\//, '') : '';
};

/**
 * Removes the trailing slash from the given URL string.
 * @param {string} url - The URL string to modify.
 * @returns {string} A new URL string with the trailing slash removed.
 */
export const removeTrailingSlash = (url?: string): string => {
	return url ? url.replace(/\/$/, '') : '';
};

/**
 * Adds a trailing slash to the given URL string.
 * @param {string} url - The URL string to modify.
 * @returns {string} A new URL string with the trailing slash added.
 */
export const addTrailingSlash = (url?: string): string => {
	return url ? url.replace(/\/?$/, '/') : '';
};

/**
 * Checks if the given URL is an external link.
 * @param {string} url - The URL to check.
 * @returns {boolean} A boolean indicating whether the URL is an external link.
 */
export const isExternalLink = (url?: string): boolean => {
	return url ? url.includes('http') : false;
};

/**
 * Checks if the given URL is a valid HTTP URL.
 * @param {string} input - The URL to check.
 * @returns {boolean} A boolean indicating whether the URL is a valid HTTP URL.
 * @example isValidHTTPUrl('http://example.com') // true
 * @example isValidHTTPUrl('https://example.com') // true
 * @example isValidHTTPUrl('ftp://example.com') // false
 * @example isValidHTTPUrl('example.com') // false
 */
export const isValidHTTPUrl = (input: string) => {
	let url: URL;

	try {
		url = new URL(input);
	} catch {
		return false;
	}

	return ['http:', 'https:'].includes(url.protocol);
};
