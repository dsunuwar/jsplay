import { defaultToString } from '../utils';
import { LinkedList } from '../linkedLists';
import ValuePair from '../dictionaries';
import { HashTable } from './hashTable';
/**
 * In this technique, linked list is used for each position of the table.
 * Incase of collision the colliding element is simply pushed into linked list at
 * that position.
 *
 * To implement this technique, we can extend the HashTable to reuse similar functionalities.
 * We will override put, get, remove methods in HashTable to give collision handling feature.
 */
export class SeparateChaining extends HashTable {
	constructor(toStrFn = defaultToString) {
		super(toStrFn);
	}

	put(key, value) {
		if (key && value) {
			const position = this.hashCode(key);

			// if position does not exist, create it and init with linked list
			if (!this.table[position]) {
				this.table[position] = new LinkedList();
			}
			// if the position exist, push new value to the linked list at that position
			this.table[position].push(new ValuePair(key, value));

			return true;
		}
		return false;
	}
	remove(key) {
		const position = this.hashCode(key);
		const linkedList = this.table[position];

		if (linkedList && !linkedList.isEmpty()) {
			let current = linkedList.getHead();
			while (current != null) {
				if (current.element.key === key) {
					linkedList.remove(current.element);
					if (linkedList.isEmpty()) {
						delete this.table[position];
					}
					return true;
				}
				current = current.nextElement;
			}
		}
		return false;
	}
	get(key) {
		const position = this.hashCode(key);
		const linkedList = this.table[position];

		if (linkedList && !linkedList.isEmpty()) {
			// traverse the linkList
			let current = linkedList.getHead();
			while (current != null) {
				if (current.element.key === key) {
					return current.element.value;
				}
				current = current.nextElement;
			}
		}
		return undefined;
	}
}

/**
 * TEST
let hash = new fromHash.LinearProbing();

// populate Hash Table
hash.put('Ygritte', 'ygritte@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Jack', 'jack@email.com');
hash.put('Jasmine', 'jasmine@email.com');
hash.put('Jake', 'jake@email.com');
hash.put('Nathan', 'nathan@email.com');
hash.put('Athelstan', 'athelstan@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Aethelwulf', 'aethelwulf@email.com');
hash.put('Sargeras', 'sargeras@email.com');

log(hash.table);
log(hash.remove('Athelstan'));
log(hash.table);
log(hash.remove('Sue'));
log(hash.table);

// Hash locations for each names
// 4 - Ygritte
// 5 - Jonathan *
// 5 - Jamie    *
// 7 - Jack ..
// 8 - Jasmine
// 9 - Jake
// 10 - Nathan
// 7 - Athelstan    ..
// 5 - Sue  *
// 5 - Aethelwulf   *
// 10 - Sargeras
 */
