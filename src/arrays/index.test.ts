import { describe, expect, it } from 'vitest';

import {
	arrayDifference,
	arrayIntersection,
	rangeArray,
	shuffleArray,
	splitArrayChunks,
} from '.';

describe('rangeArray', () => {
	it('generates an array of numbers', () => {
		expect(rangeArray(1, 5)).toEqual([1, 2, 3, 4, 5]);
		expect(rangeArray(0, 0)).toEqual([0]);
		expect(rangeArray(-3, 3)).toEqual([-3, -2, -1, 0, 1, 2, 3]);
	});
});

describe('splitArrayChunks', () => {
	it('splits an array into chunks of specified size', () => {
		expect(splitArrayChunks([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
			[1, 2, 3],
			[4, 5, 6],
			[7],
		]);
		expect(splitArrayChunks([1, 2, 3, 4, 5, 6], 5)).toEqual([
			[1, 2, 3, 4, 5],
			[6],
		]);
		expect(splitArrayChunks([], 3)).toEqual([]);
	});
});

describe('shuffleArray', () => {
	it('should shuffles an array', () => {
		const array = [1, 2, 3, 4, 5];
		const shuffledArray = shuffleArray(array);

		expect(shuffledArray).not.toEqual(array);
		expect(shuffledArray).toHaveLength(array.length);
		expect(shuffledArray).toEqual(expect.arrayContaining(array));
	});
});

describe('arrayDifference', () => {
	it('should return the difference between two arrays', () => {
		expect(arrayDifference([1, 2, 3], [2, 3, 4])).toEqual([1]);
		expect(arrayDifference([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3]);
	});
});

describe('arrayIntersection', () => {
	it('should return the intersection between two arrays', () => {
		expect(arrayIntersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
		expect(arrayIntersection([1, 2, 3], [4, 5, 6])).toEqual([]);
	});
});
