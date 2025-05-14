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
  it('should format bytes into a human-readable string for exact values in binary mode', () => {
    expect(formatBytes(1024)).toBe('1 KiB');
    expect(formatBytes(1024 * 1024)).toBe('1 MiB');
    expect(formatBytes(1024 * 1024 * 1024)).toBe('1 GiB');
    expect(formatBytes(1024 * 1024 * 1024 * 1024)).toBe('1 TiB');
    expect(formatBytes(1024 * 1024 * 1024 * 1024 * 1024)).toBe('1 PiB');
    expect(formatBytes(1024 * 1024 * 1024 * 1024 * 1024 * 1024)).toBe('1 EiB');
    expect(formatBytes(1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024)).toBe(
      '1 ZiB',
    );
    expect(
      formatBytes(1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024),
    ).toBe('1 YiB');
  });

  it('should format bytes into a human-readable string for exact values in decimal mode', () => {
    expect(formatBytes(1024, 2, 'decimal')).toBe('1.02 KB');
    expect(formatBytes(1024 * 1024, 2, 'decimal')).toBe('1.05 MB');
    expect(formatBytes(1024 * 1024 * 1024, 2, 'decimal')).toBe('1.07 GB');
    expect(formatBytes(1024 * 1024 * 1024 * 1024, 2, 'decimal')).toBe('1.1 TB');
    expect(formatBytes(1024 * 1024 * 1024 * 1024 * 1024, 2, 'decimal')).toBe(
      '1.13 PB',
    );
    expect(
      formatBytes(1024 * 1024 * 1024 * 1024 * 1024 * 1024, 2, 'decimal'),
    ).toBe('1.15 EB');
    expect(
      formatBytes(1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024, 2, 'decimal'),
    ).toBe('1.18 ZB');
    expect(
      formatBytes(
        1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
        2,
        'decimal',
      ),
    ).toBe('1.21 YB');
  });

  it('should format bytes into a human-readable string for non-exact values in binary mode', () => {
    expect(formatBytes(123456789)).toBe('117.74 MiB');
    expect(formatBytes(1234567890)).toBe('1.15 GiB');
    expect(formatBytes(1234567890123)).toBe('1.12 TiB');
  });

  it('should format bytes into a human-readable string for non-exact values in decimal mode', () => {
    expect(formatBytes(123456789, 2, 'decimal')).toBe('123.46 MB');
    expect(formatBytes(1234567890, 2, 'decimal')).toBe('1.23 GB');
    expect(formatBytes(1234567890123, 2, 'decimal')).toBe('1.23 TB');
  });
});
