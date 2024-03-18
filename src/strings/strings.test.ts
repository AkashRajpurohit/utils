import { describe, expect, it } from 'vitest';

import {
	convertNewlines,
	getTruncatedContent,
	stripHtml,
	getInitials,
} from './strings';

describe('stripHtml', () => {
	it('strips html tags from a string', () => {
		expect(stripHtml('<p>Hello, <strong>world!</strong></p>')).toEqual(
			'Hello, world!',
		);
		expect(stripHtml('<div><h1>Header</h1><p>Paragraph</p></div>')).toEqual(
			'HeaderParagraph',
		);
		expect(stripHtml('')).toEqual('');
	});
});

describe('convertNewlines', () => {
	it('converts newlines to specified element', () => {
		expect(convertNewlines('Hello\nworld\n')).toEqual('Hello world ');
		expect(convertNewlines('Hello\nworld\n', '<br>')).toEqual(
			'Hello<br>world<br>',
		);
		expect(convertNewlines('')).toEqual('');
	});
});

describe('getTruncatedContent', () => {
	it('gets an excerpt from a string', () => {
		expect(
			getTruncatedContent('<p>Hello, <strong>world!</strong></p>', 10),
		).toEqual('Hello, wor...');
		expect(
			getTruncatedContent(
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				20,
			),
		).toEqual('Lorem ipsum dolor si...');
		expect(getTruncatedContent('', 10)).toEqual(null);
	});
});

describe('getInitials', () => {
	it('should return empty string if value is undefined', () => {
		expect(getInitials(undefined)).toEqual('');
	});

	it('should return empty string if value is null', () => {
		expect(getInitials(null)).toEqual('');
	});

	it('should return empty string if value is an empty string', () => {
		expect(getInitials('')).toEqual('');
	});

	it('should return the initials of a single or two letters', () => {
		expect(getInitials('JD')).toEqual('JD');
	});

	it('should return the initials of a single name', () => {
		expect(getInitials('John')).toEqual('J');
	});

	it('should return the initials of two names', () => {
		expect(getInitials('John Doe')).toEqual('JD');
	});

	it('should return the initials of three names', () => {
		expect(getInitials('John Adam Doe')).toEqual('JAD');
	});

	it('should return the initials of four names', () => {
		expect(getInitials('John Adam Doe Smith')).toEqual('JADS');
	});

	it('should return the initials of two names with limit of 1', () => {
		expect(getInitials('John Doe', 1)).toEqual('J');
	});

	it('should return the initials of three names with limit of 2', () => {
		expect(getInitials('John Adam Doe', 2)).toEqual('JA');
	});

	it('should return the initials of two names with limit greater than the number of initials', () => {
		expect(getInitials('John Doe', 5)).toEqual('JD');
	});
});
