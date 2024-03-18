/**
 * Utility functions for working with objects.
 */

/**
 * Checks if an object is empty (has no own properties).
 * @param obj - The object to check.
 * @returns `true` if the object is empty, `false` otherwise.
 * @example isEmptyObject({}) // true
 * @example isEmptyObject({ key: 'value' }) // false
 */
export const isEmptyObject = (obj: Record<string, unknown> = {}) => {
	return obj.constructor === Object && !Object.entries(obj).length;
};

/**
 * Sorts two objects based on their keys' positions in an array of keys.
 * @param keys - An array of keys to sort the objects by.
 * @param a - The first object to compare.
 * @param b - The second object to compare.
 * @returns A number indicating the sort order of the two objects.
 */
export const sortObjectKeys = (keys: string[]) => {
	return (a: Record<string, unknown>, b: Record<string, unknown>) => {
		const aIndex = keys.indexOf(Object.keys(a)[0] ?? '');
		const bIndex = keys.indexOf(Object.keys(b)[0] ?? '');

		if (aIndex === -1 && bIndex === -1) return 0;
		if (aIndex === -1) return 1;
		if (bIndex === -1) return -1;

		return aIndex - bIndex;
	};
};

/**
 * Sorts the keys of an object in alphabetical order and returns a new object with the sorted keys.
 * @param obj - The input object to sort.
 * @param comparator - An optional comparator function to use when sorting the keys.
 * @returns - A new object with the sorted keys.
 * @example sortObject({ b: 2, a: 1}) // { a: 1, b: 2 }
 */
export const sortObject = <T extends Record<K, unknown>, K extends keyof T>(
	obj: T,
	comparator?: (a: unknown, b: unknown) => number,
) => {
	return Object.keys(obj)
		.sort(comparator)
		.reduce((result, key) => {
			return Object.assign(result, { [key]: obj[key as K] });
		}, {} as T);
};

/**
 * Returns a new object with the same keys as the input object, but with the values mapped using the provided function.
 * @param obj - The input object to map.
 * @param mapper - A function that maps the values of the object.
 * @returns A new object with the mapped values.
 * @example mapObjectValues({ a: 1, b: 2 }, value => value * 2) // { a: 2, b: 4 }
 */
export const mapObjectValues = <T, U>(
	obj: Record<string, T>,
	mapper: (value: T) => U,
) => {
	return Object.keys(obj).reduce(
		(result, key) => {
			return Object.assign(result, { [key]: mapper(obj[key]) });
		},
		{} as Record<string, U>,
	);
};
