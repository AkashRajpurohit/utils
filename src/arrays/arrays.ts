/**
 * Utility functions for working with arrays.
 */

/**
 * A utility function that generates an array of numbers within a specified range.
 * @param start - The starting number of the range.
 * @param end - The ending number of the range.
 * @returns An array of numbers within the specified range.
 */
export const rangeArray = (start: number, end: number) => {
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
export const shuffleArray = <T>(array: T[]) => {
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

/**
 * A utility function that returns the difference between two arrays.
 * @param array1 - The first array.
 * @param array2 - The second array.
 * @returns An array containing the difference between the two arrays.
 * @example arrayDifference([1, 2, 3], [2, 3, 4]) // [1]
 * @example arrayDifference([1, 2, 3], [4, 5, 6]) // [1, 2, 3]
 */
export const arrayDifference = <T>(array1: T[], array2: T[]) => {
	return array1.filter((arr1) => !array2.includes(arr1));
};

/**
 * A utility function that returns the intersection between two arrays.
 * @param array1 - The first array.
 * @param array2 - The second array.
 * @returns An array containing the intersection between the two arrays.
 * @example arrayIntersection([1, 2, 3], [2, 3, 4]) // [2, 3]
 * @example arrayIntersection([1, 2, 3], [4, 5, 6]) // []
 */
export const arrayIntersection = <T>(array1: T[], array2: T[]) => {
	return array1.filter((arr1) => array2.includes(arr1));
};
