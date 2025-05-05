import { describe, expect, it } from 'vitest';

import {
  formatBytes,
  formatNumber,
  getRandomNumber,
  parseNumericValue,
} from '.';

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

describe('formatNumber', () => {
  it('should format a number in given locale', () => {
    expect(formatNumber(123456.789, 'de-DE')).toBe('123.456,789');
    expect(formatNumber(123456.789, 'en-US')).toBe('123,456.789');
  });
});

describe('formatBytes', () => {
  it('should format bytes into a human-readable string for exact values', () => {
    expect(formatBytes(1024)).toBe('1 KB');
    expect(formatBytes(1024 * 1024)).toBe('1 MB');
    expect(formatBytes(1024 * 1024 * 1024)).toBe('1 GB');
    expect(formatBytes(1024 * 1024 * 1024 * 1024)).toBe('1 TB');
    expect(formatBytes(1024 * 1024 * 1024 * 1024 * 1024)).toBe('1 PB');
    expect(formatBytes(1024 * 1024 * 1024 * 1024 * 1024 * 1024)).toBe('1 EB');
    expect(formatBytes(1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024)).toBe(
      '1 ZB',
    );
    expect(
      formatBytes(1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024),
    ).toBe('1 YB');
  });

  it('should format bytes into a human-readable string for non-exact values', () => {
    expect(formatBytes(123456789)).toBe('117.74 MB');
    expect(formatBytes(1234567890)).toBe('1.15 GB');
    expect(formatBytes(1234567890123)).toBe('1.12 TB');
  });
});
