import { defaultToString } from '../utils';
export class Dictionary {
	toStrFn;
	table;

	constructor(toStrFn = defaultToString) {
		this.toStrFn = toStrFn;
		this.table = {};
	}

	/**
	 * This method adds a new element to the dictionary. If the key already exists,
	 * the existing value will be overwritten with the new one.
	 * @param key
	 * @param value
	 */
	set(key, value) {
		if (key !== null && value !== null) {
			const tableKey = this.toStrFn(key);
			this.table[tableKey] = new ValuePair(key, value);
			return true;
		}
		return false;
	}

	remove(key) {
		if (this.hasKey(key)) {
			delete this.table[this.toStrFn(key)];
			return true;
		}
		return false;
	}

	/**
	 * This method returns true if the key exists in the dictionary and false otherwise.
	 * @param key
	 */
	hasKey(key) {
		return this.table[this.toStrFn(key)] !== null;
	}

	get(key) {
		const valuePair = this.table[this.toStrFn(key)];
		// use == to caputre null and undefined valuePair
		return valuePair == null ? undefined : valuePair.value;
	}

	// a different way to implement get
	// this one has more error profing but comes at a cost of accessing table twice
	// get(key) {
	// 	if (this.hasKey(key)) {
	// 		this.table[this.toStrFn(key)];
	// 	}
	// 	return undefined;
	// }

	clear() {
		this.table = {};
	}
	size() {
		return Object.keys(this.table).length;
	}
	isEmpty() {
		return this.size() === 0;
	}

	// returns all the keys
	keys() {
		return this.keyValues().map(valuePair => valuePair.key);

		// Alternate way: without using buit in method map
		// const keys: any = [];
		// const valuePairs = this.keyValues();
		// for (let i = 0; i < valuePairs.length; i++) {
		// 	keys.push(valuePairs[i].key);
		// }
		// return keys;
	}

	values() {
		return this.keyValues().map(valuePair => valuePair.value);
	}

	// return an array with all value pairs objects in dictionary
	keyValues() {
		const valuePairs: any = [];
		for (const k in this.table) {
			if (this.hasKey(k)) {
				valuePairs.push(this.table[k]);
			}
		}
		return valuePairs;

		// Using ES2017:
		// return Object.values(this.table);
	}

	forEach(callBackFn) {
		const valuePairs = this.keyValues();
		for (let i = 0; i < valuePairs.length; i++) {
			const result = callBackFn(valuePairs[i].key, valuePairs[i].value);
			if (result === false) break;
		}
	}

	toString() {
		if (this.isEmpty()) {
			return '';
		}
		const valuePairs = this.keyValues();
		let objString = `${valuePairs[0].toString()}`;
		for (let i = 1; i < valuePairs.length; i++) {
			objString = `${objString}, ${valuePairs[i].toString()}`;
		}
		return objString;
	}
}

export class ValuePair {
	key;
	value;

	constructor(key, value) {
		this.key = key;
		this.value = value;
	}

	toString() {
		return `[#${this.key}: ${this.value}]`;
	}
}

/**
 * defaultToString:
 * In a dictinary, the ideal would be to store keys of type string and any type of value.
 * However, because JavaScript is not strongly typed, we cannot gurantee the key will be a string.
 * For this reason, we need to use a toStrFn.
 */

/**
  * TEST:
const map = new fromDictionary.Dictionary();
map.set('dilip', 'dilip@email.com');
map.set('John', 'john@gmail.com');
map.set('Thea', 'thea@me.com');

// test forEach by passing in custom callback
log(
	map.forEach((key, value) => {
		console.log(`key: ${key}, value: ${value}`);
		//note:  return false to exit the looping
	})
);

log(map.toString());
*/
