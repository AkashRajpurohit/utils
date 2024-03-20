/**
 * Utility functions for working with arrays.
 */

/**
 * A utility function that generates an array of numbers within a specified range.
 * @param start - The starting number of the range.
 * @param end - The ending number of the range.
 * @returns An array of numbers within the specified range.
 */
export const range = (start: number, end: number) => {
	const length = end - start + 1;

	return Array.from({ length }, (_, idx) => idx + start);
};

/**
 * Splits an array into chunks of a specified size.
 * @param array - The array to split into chunks.
 * @param chunkSize - The size of each chunk.
 * @returns An array of arrays, each containing a chunk of the original array.
 */
export const splitArrayChunks = <T>(array: T[], chunkSize: number) => {
	const chunks: T[][] = [];

	for (let i = 0; i < array.length; i += chunkSize) {
		chunks.push(array.slice(i, i + chunkSize));
	}

	return chunks;
};

/**
 * Shuffle a given array
 * @param array - The array to shuffle
 * @returns A shuffled array
 * @example shuffle([1, 2, 3, 4, 5]) // [3, 2, 5, 1, 4]
 */
export const shuffle = <T>(array: T[]) => {
	const shuffledArray = [...array];

	for (let i = 0; i < shuffledArray.length; i++) {
		const randomIndex = Math.floor(Math.random() * shuffledArray.length);
		[shuffledArray[i], shuffledArray[randomIndex]] = [
			shuffledArray[randomIndex],
			shuffledArray[i],
		];
	}

	return shuffledArray;
};
