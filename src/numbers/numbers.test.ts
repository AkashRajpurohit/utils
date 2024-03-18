import { describe, expect, it } from 'vitest';

import { getRandomNumber, parseNumericValue } from './numbers';

describe('parseNumericValue', () => {
	it('parses a string into a number', () => {
		expect(parseNumericValue('5')).toBe(5);
	});

	it('returns the original string if it cannot be parsed', () => {
		expect(parseNumericValue('not a number')).toBe('not a number');
	});
});

describe('getRandomNumber', () => {
	it('returns a random number within the specified range', () => {
		const min = 1;
		const max = 10;
		const randomNumber = getRandomNumber(min, max);
		expect(randomNumber).toBeGreaterThanOrEqual(min);
		expect(randomNumber).toBeLessThanOrEqual(max);
	});
});
