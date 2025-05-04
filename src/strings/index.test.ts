import { describe, expect, it } from 'vitest';

import {
  capitalizeSentence,
  convertNewlines,
  getInitials,
  getTruncatedContent,
  maskString,
  maskStringReverse,
  slugifyString,
  stripHtml,
  unSlugifyString,
  isValidEmail,
} from '.';

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
  it('gets the truncated string with ellipses from a string', () => {
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

  it('gets the original string if the length is greater than the string length', () => {
    expect(getTruncatedContent('Lorem ipsum dolor sit amet', 100)).toEqual(
      'Lorem ipsum dolor sit amet',
    );
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

describe('slugifyString', () => {
  it('should slugify a string', () => {
    expect(slugifyString('Hello world')).toEqual('Hello-world');
    expect(slugifyString('Hello world', '_')).toEqual('Hello_world');
  });
});

describe('unSlugifyString', () => {
  it('should unslugify a string', () => {
    expect(unSlugifyString('Hello-world')).toEqual('Hello world');
    expect(unSlugifyString('Hello_world', '_')).toEqual('Hello world');
  });
});

describe('capitalizeSentence', () => {
  it('should capitalize the first letter of a sentence', () => {
    expect(capitalizeSentence('hello world')).toEqual('Hello World');
    expect(capitalizeSentence('hello world.')).toEqual('Hello World.');
  });
});

describe('maskString', () => {
  it('should mask a string with asterisks', () => {
    expect(maskString('1234567890', 6)).toEqual('******7890');
    expect(maskString('1234567890', 6, 'x')).toEqual('xxxxxx7890');
    expect(maskString('12345', 6)).toEqual('*****');
  });
});

describe('maskStringReverse', () => {
  it('should mask a string with asterisks from the end', () => {
    expect(maskStringReverse('1234567890', 6)).toEqual('1234******');
  });

  it('should mask a string with a specified character from the end', () => {
    expect(maskStringReverse('1234567890', 6, 'x')).toEqual('1234xxxxxx');
  });

  it('should mask a string with a specified character from the end', () => {
    expect(maskStringReverse('1234567890', 30, 'x')).toEqual('xxxxxxxxxx');
  });
});

describe('isValidEmail', () => {
  it('should return true for valid email addresses', () => {
    expect(isValidEmail('akash@gmail.com')).toEqual(true);
  });

  it('should return false for invalid email addresses', () => {
    expect(isValidEmail('sadsa')).toEqual(false);
  });
});
