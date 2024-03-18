import { describe, expect, it } from 'vitest';

import {
	formatDate,
	formatDateOrTime,
	formatDateTime,
	formatTime,
	getReadTime,
} from './time';

const timestamp = '2024-01-01 00:00:00.000';

describe('formatDate', () => {
	it('formats date correctly', () => {
		expect(formatDate(timestamp)).toEqual('Jan 1, 2024');
	});
});

describe('formatTime', () => {
	it('formats time correctly', () => {
		expect(formatTime(timestamp)).toEqual('12:00 AM');
	});
});

describe('formatDateTime', () => {
	it('formats date and time correctly', () => {
		expect(formatDateTime(timestamp)).includes('Jan 1, 2024');
		expect(formatDateTime(timestamp)).includes('2:00 AM');
	});
});

describe('formatDateOrTime', () => {
	it('formats date correctly', () => {
		expect(formatDateOrTime(timestamp, 'date')).toEqual('Jan 1, 2024');
	});

	it('formats time correctly', () => {
		expect(formatDateOrTime(timestamp, 'time')).toEqual('12:00 AM');
	});

	it('formats date and time correctly', () => {
		expect(formatDateOrTime(timestamp, 'datetime')).includes('Jan 1, 2024');
		expect(formatDateOrTime(timestamp, 'datetime')).includes('2:00 AM');
	});
});

describe('getReadTime', () => {
	it('calculates read time correctly', () => {
		const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
		expect(getReadTime(content)).toEqual(1);
	});

	it('returns 0 for empty content', () => {
		expect(getReadTime(null)).toEqual(0);
	});
});
