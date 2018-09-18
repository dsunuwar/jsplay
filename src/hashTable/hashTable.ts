import { defaultToString } from '../utils';
import ValuePair from '../dictionaries';
import loseloseHash from './loseloseHashFunction';
import { djb2HashCode } from './djb2HashFunction';

export class HashTable {
	private toStrFn;
	table;
	constructor(toStrFn = defaultToString) {
		this.toStrFn = toStrFn;
		this.table = {};
	}

	protected hashCode(key) {
		// better hash function than loselose, no collisions!
		return djb2HashCode(key, this.toStrFn);

		// creates collision and handles collision
		return loseloseHash(key, this.toStrFn);
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

	hashToString() {
		const tableKeys = Object.keys(this.table);
		let objString = `{${tableKeys[0]}: ${this.table[tableKeys[0]].toString()}}`;
		for (let i = 1; i < tableKeys.length; i++) {
			objString = `${objString},{${tableKeys[i]}: ${this.table[tableKeys[i]].toString()}}`;
		}
		return objString;
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
