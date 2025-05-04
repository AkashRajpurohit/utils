/**
 * Utility functions around manipulating strings
 */

/**
 * Strip html tags from a string
 * @param string - string to strip tags from
 * @returns string without html tags
 * @example stripHtml('<p>Hello, world!</p>') // 'Hello, world!'
 */
export const stripHtml = (string: string) => {
  return string.replace(/<[^>]*>?/gm, '');
};

/**
 * Convert newlines to specified element
 * @param string - string to convert
 * @param replacement - replacement to convert newlines to
 * @returns string with newlines converted to specified element
 * @example convertNewlines('Hello\nworld!') // 'Hello world!'
 */
export const convertNewlines = (string: string, replacement = ' ') => {
  return string.replace(/\n+/g, replacement);
};

/**
 * Get truncated text ending with ellipsis if the text is longer than the specified length
 * @param content - The string to truncate
 * @param length - The length of the final string
 * @returns An excerpt of the truncated text with ellipsis
 * @example getTruncatedContent('This is a long string', 10) // 'This is a...'
 */
export const getTruncatedContent = (
  content: string | undefined | null,
  length = 250,
) => {
  if (!content) {
    return null;
  }

  const plainText = convertNewlines(stripHtml(content));
  const text = plainText.slice(0, length).trim();

  if (text.length < plainText.length) {
    return `${text}...`;
  }

  return text;
};

/**
 * Get the initials from a string
 * @param value A string to get the initials from
 * @param limit The maximum number of initials to return
 * @returns The initials from the string
 * @example getInitials('John Doe') // 'JD'
 */
export const getInitials = (value?: string | null, limit = 0) => {
  const val = (value || '').trim();

  // If the value is empty, a single character, or two characters (already initials)
  if (val.length === 0 || val.length === 1 || val.length === 2) {
    return val.toUpperCase();
  }

  const values = val.split(' ').filter(Boolean);
  const initials = values.map((name) => name.charAt(0).toUpperCase()).join('');

  if (limit > 0) {
    return initials.slice(0, limit);
  }

  return initials;
};

/**
 * A utility function that slugify a string
 * @param string - The string to slugify
 * @param delimiter - The delimiter to use for the slug
 * @returns The slugified string
 * @example slugifyString('Hello world') // 'Hello-world'
 * @example slugifyString('Hello world', '_') // 'Hello_world'
 */
export const slugifyString = (string: string, delimiter = '-') =>
  string.split(' ').join(delimiter);

/**
 * A utility function that unslugify a string
 * @param string - The string to unslugify
 * @param delimiter - The delimiter to use for the slug
 * @returns The unslugified string
 * @example unSlugifyString('Hello-world') // 'Hello world'
 * @example unSlugifyString('Hello_world', '_') // 'Hello world'
 */
export const unSlugifyString = (string: string, delimiter = '-') =>
  string.split(delimiter).join(' ');

/**
 * Capitalize the first letter of a sentence
 * @param sentence - The sentence to capitalize
 * @returns The capitalized sentence
 * @example capitalizeSentence('hello, world!') // 'Hello, World!'
 */
export const capitalizeSentence = (sentence: string) => {
  return sentence
    .split(' ')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ');
};

/**
 * Mask a string with a specified character
 * @param string - The string to mask
 * @param maskLength - The length of the string to mask
 * @param mask - The character to use for masking. Default is '*'
 * @returns The masked string
 * @example maskString('1234567890', 6) // '******7890'
 * @example maskString('1234567890', 6, 'x') // 'xxxxxx7890'
 * @example maskString('12345', 6) // '*****'
 */
export const maskString = (string: string, maskLength: number, mask = '*') => {
  const masked = string.slice(-maskLength);
  return mask.repeat(masked.length) + string.slice(masked.length);
};

/**
 * Mask a string with a specified character from the end
 * @param string - The string to mask
 * @param maskLength - The length of the string to mask
 * @param mask - The character to use for masking. Default is '*'
 * @returns The masked string
 * @example maskStringReverse('1234567890', 6) // '123456******'
 */
export const maskStringReverse = (
  string: string,
  maskLength: number,
  mask = '*',
) => {
  const masked = string.slice(0, maskLength);
  return string.slice(0, -maskLength) + mask.repeat(masked.length);
};

/**
 * Checks if a string is a valid email
 * @param email - The email to validate
 * @returns Boolean indicating if the email is valid
 * @example isValidEmail('sadsa') // false
 * @example isValidEmail('akash@gmail.com') // true
 */
export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
