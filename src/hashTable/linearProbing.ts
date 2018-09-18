import { HashTable } from './hashTable';
import { defaultToString } from '../utils';
import ValuePair from '../dictionaries';

/**
 * In Linear probing values are stored directly in the table, not in a separate data
 * structure like LinkedList. When we try to add a new element, if the position is already
 * occupied, then we will try position +1, until we find a free position.
 */
export class LinearProbing extends HashTable {
	constructor(toStrFn = defaultToString) {
		super(toStrFn);
	}

	put(key, value) {
		if (key && value) {
			const position = this.hashCode(key);
			if (this.table[position] == null) {
				this.table[position] = new ValuePair(key, value);
			} else {
				let index = position + 1;
				while (this.table[index] != null) {
					// find empty slot
					index++;
				}
				this.table[index] = new ValuePair(key, value);
			}
			return true;
		}
		return false;
	}

	get(key) {
		const position = this.hashCode(key);
		if (this.table[position] != null) {
			if (this.table[position].key === key) return this.table[position].value;

			// element not in first position, search
			let index = position + 1;

			// search until element is not found
			// when element is found the while loop will break
			while (this.table[index] != null && this.table[index].key !== key) index++;
			if (this.table[index] != null && this.table[index].key === key) {
				// element is found
				return this.table[index].value;
			}
		}

		return undefined;
	}

	/**
	 * This remove method implements, "Shifting elements backward" by verifying
	 * side effect after each remove operation.
	 */
	remove(key) {
		const position = this.hashCode(key);
		if (this.table[position] != null) {
			// if element is found at the first position
			if (this.table[position].key === key) {
				delete this.table[position];
				this.verifyRemoveSideEffect(key, position);
				return true;
			}
			let index = position + 1;
			// search for the key until it is found
			// loop will break out when element is found
			while (this.table[index] != null && this.table[index].key !== key) index++;
			if (this.table[index] != null && this.table[index].key === key) {
				delete this.table[index];
				this.verifyRemoveSideEffect(key, index);
				return true;
			}
		}

		return false;
	}

	verifyRemoveSideEffect(key, removedPosition) {
		const hash = this.hashCode(key);
		let index = removedPosition + 1;
		while (this.table[index] != null) {
			const posHash = this.hashCode(this.table[index].key);
			if (posHash <= hash || posHash <= removedPosition) {
				this.table[removedPosition] = this.table[index];
				delete this.table[index];
				removedPosition = index;
			}
			index++;
		}
	}
}
