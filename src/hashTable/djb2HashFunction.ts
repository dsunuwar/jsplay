/**
 * djb2HashCode is better than lose-lose hash function. It is simple and one of the
 * most highly recommended hash functions by the community.
 * @param key djb2HashCode is
 */
export function djb2HashCode(key, toStrFn) {
	const PRIME_CODE = 5381; // magic prime number most implementations use
	const MAGIC_NUMBER = 33; // magic number
	const RANDOM_PRIME = 1013; // prefferably greater than size of HashTable

	const tableKey = toStrFn(key);
	let hash = PRIME_CODE;
	for (let i = 0; i < tableKey.length; i++) {
		hash = hash * MAGIC_NUMBER + tableKey.charCodeAt(i);
	}
	return hash % RANDOM_PRIME;
}

/**
 * A good hash function is composed of certain factors:
 * - the time to insert and retrieve an element (performance) and
 * - also a low probability of collisions
 *
 * The lose-lose hash function is simple but not a good hash function.
 * It results too many collisions. djb2 is a better in this regards resulting far
 * lesser collisions.
 *
 */

/**
 * More techniques to create hash functions for numeric keys:
 * http://web.archive.org/web/20071223173210/http://www.concentric.net/~Ttwang/tech/inthash.htm
 */
