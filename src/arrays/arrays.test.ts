import { describe, expect, it } from 'vitest';

import { range, splitArrayChunks } from './arrays';

describe('range', () => {
	it('generates an array of numbers', () => {
		expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
		expect(range(0, 0)).toEqual([0]);
		expect(range(-3, 3)).toEqual([-3, -2, -1, 0, 1, 2, 3]);
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
