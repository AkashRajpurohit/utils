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
