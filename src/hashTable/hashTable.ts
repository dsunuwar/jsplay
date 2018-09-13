import { defaultToString } from '../utils';
import { ValuePair } from '../dictionaries';

export class HashTable {
	toStrFn;
	table;
	constructor(toStrFn = defaultToString) {
		this.toStrFn = toStrFn;
		this.table = {};
	}

	// add new item or update if exist
	put(key, value) {
		// check for valid key and value
		if (key && value) {
			const tableKey = this.hashCode(key);
			this.table[tableKey] = new ValuePair(key, value); // key is also stored for info purpose
			return true;
		}
		return false;
	}

	remove(key) {
		// note key is not tableKey or hashCode
		const tableKey = this.hashCode(key);
		const valuePair = this.table[tableKey];
		if (valuePair) {
			delete this.table[tableKey];
			// instead of delete keyword, we can also do,
			// this.table[tableKey] = null or undefined;
			return true;
		}
		return false;
	}

	// similar to get in Dictionary
	get(key) {
		const valuePair = this.table[this.hashCode(key)];
		return valuePair ? valuePair.value : undefined;
	}

	hashCode(key) {
		return this.loseloseHash(key);
	}

	private loseloseHash(key) {
		if (typeof key === 'number') return key;

		let sum = 0;
		const tableKey = this.toStrFn(key);
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
}

/**
 * HashTable Vs Dictionary:
 * - hash table uses a hash function, dictionary does not.
 * - hashTable uses number as table key, dictonary uses string.
 */

/**
  * TEST:

  let hash = new fromHash.HashTable();

// populate Hash Table
hash.put('dilip', 'dilip@email.com');
hash.put('john', 'john@email.com');
hash.put('terry', 'terry@email.com');

// check emails are stored
log(hash.table);

// test get
log(hash.get('terry')); // terry@email.com

// test remove
log(hash.remove('john')); // true
  */
