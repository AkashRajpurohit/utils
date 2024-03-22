/**
 * Utility functions around manipulating strings
 */

/**
 * Strip html tags from a string
 * @param string - string to strip tags from
 * @returns string without html tags
 * @example stripHtml('<p>Hello, world!</p>') // 'Hello, world!'
 */
export const stripHtml = (string: string) => {
	return string.replace(/<[^>]*>?/gm, '');
};

/**
 * Convert newlines to specified element
 * @param string - string to convert
 * @param replacement - replacement to convert newlines to
 * @returns string with newlines converted to specified element
 * @example convertNewlines('Hello\nworld!') // 'Hello world!'
 */
export const convertNewlines = (string: string, replacement = ' ') => {
	return string.replace(/\n+/g, replacement);
};

/**
 * Get truncated text ending with ellipsis if the text is longer than the specified length
 * @param content - The string to truncate
 * @param length - The length of the final string
 * @returns An excerpt of the truncated text with ellipsis
 * @example getTruncatedContent('This is a long string', 10) // 'This is a...'
 */
export const getTruncatedContent = (
	content: string | undefined | null,
	length = 250,
) => {
	if (!content) {
		return null;
	}

	const plainText = convertNewlines(stripHtml(content));
	const text = plainText.slice(0, length).trim();

	if (text.length < plainText.length) {
		return `${text}...`;
	}

	return text;
};

/**
 * Get the initials from a string
 * @param value A string to get the initials from
 * @param limit The maximum number of initials to return
 * @returns The initials from the string
 * @example getInitials('John Doe') // 'JD'
 */
export const getInitials = (value?: string | null, limit = 0) => {
	const val = (value || '').trim();

	// If the value is empty, a single character, or two characters (already initials)
	if (val.length === 0 || val.length === 1 || val.length === 2) {
		return val.toUpperCase();
	}

	const values = val.split(' ').filter(Boolean);
	const initials = values.map((name) => name.charAt(0).toUpperCase()).join('');

	if (limit > 0) {
		return initials.slice(0, limit);
	}

	return initials;
};

/**
 * A utility function that slugify a string
 * @param string - The string to slugify
 * @param delimiter - The delimiter to use for the slug
 * @returns The slugified string
 * @example slugifyString('Hello world') // 'Hello-world'
 * @example slugifyString('Hello world', '_') // 'Hello_world'
 */
export const slugifyString = (string: string, delimiter = '-') =>
	string.split(' ').join(delimiter);

/**
 * A utility function that unslugify a string
 * @param string - The string to unslugify
 * @param delimiter - The delimiter to use for the slug
 * @returns The unslugified string
 * @example unSlugifyString('Hello-world') // 'Hello world'
 * @example unSlugifyString('Hello_world', '_') // 'Hello world'
 */
export const unSlugifyString = (string: string, delimiter = '-') =>
	string.split(delimiter).join(' ');

/**
 * Capitalize the first letter of a sentence
 * @param sentence - The sentence to capitalize
 * @returns The capitalized sentence
 * @example capitalizeSentence('hello, world!') // 'Hello, World!'
 */
export const capitalizeSentence = (sentence: string) => {
	return sentence
		.split(' ')
		.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
		.join(' ');
};
