/**
 * Utility functions for working with numbers.
 */

/**
 * Generates a random number between the specified minimum and maximum values (inclusive).
 *
 * @param min The minimum value for the random number.
 * @param max The maximum value for the random number.
 * @returns A random number between the specified minimum and maximum values.
 */
export const getRandomNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Parse a string into a numeric value.
 * @param string - The string to parse.
 * @returns The parsed numeric value, or the original string if it cannot be parsed.
 */
export const parseNumericValue = (string: string) => {
	const number = Number.parseFloat(string);

	return Number.isNaN(number) ? string : number;
};

/**
 * A utility function that formats a number in specified locale
 * @param number - The number to format
 * @param locale - The locale to use for formatting
 * @returns A string representation of the number in the specified locale
 * @example formatNumber(123456.789, 'de-DE') // 123.456,789
 * @example formatNumber(123456.789, 'en-US') // 123,456.789
 */
export const formatNumber = (
	number: number,
	locale: Intl.LocalesArgument = 'en-US',
) => {
	return number.toLocaleString(locale);
};
