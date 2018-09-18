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
