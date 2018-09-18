/**
 * "lose-lose hash" function is the most common one. itsimply sums up the ASCII values
 * of each character of the key length.
 * @param key - key of the valuePair, e.g. {key: 'name', value: 'Dilip'}
 * @param toStrFn - function to convert key into string
 */
export default function loseloseHash(key: string, toStrFn) {
	if (typeof key === 'number') return key;

	let sum = 0;
	const tableKey = toStrFn(key);
	for (let i = 0; i < tableKey.length; i++) {
		sum += tableKey.charCodeAt(i);
	}
	return sum % 37; // ASCII of 37 is %

	/**
		 * Note: the sum could be too big number that do not fit in a numeric variable.
		 * To avoid this situation, we can divide the sum with an arbitary number and
		 * use the remainder as key. This will avoid risking working with very big numbers.
         
         * ASCII Table:
         * http://www.asciitable.com/
		 */
}
