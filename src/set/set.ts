export class Set {
	items;
	constructor() {
		this.items = {};
	}

	add(element): boolean {
		if (!this.has(element)) {
			this.items[element] = element;
			return true;
		}
		return false;
	}

	delete(element): boolean {
		if (this.has(element)) {
			delete this.items[element];
			return true;
		}
		return false;
	}
	has(element): boolean {
		return Object.prototype.hasOwnProperty.call(this.items, element);
	}
	clear() {
		this.items = {};
	}
	size(): number {
		// three ways to implement
		// first: maintain a count property in class
		// second: return Object.keys(this.items).length;second: iterate
		// third: iterate through all objects and count. I will implement third one here.
		let count = 0;
		for (let item in this.items) {
			if (this.items.hasOwnProperty(item)) count++;
		}

		return count;
	}

	values(): any[] {
		// two ways
		// first: Object.values(this.items);
		// second: iterate through as below
		let values: any = [];
		for (let item in this.items) {
			if (this.items.hasOwnProperty(item)) {
				values.push(item);
			}
		}
		return values;
	}

	//** Begin: MATHEMATICAL Set Oeprations */

	// given two sets, this returns a new set of elements from both of the given sets.
	// Note: it only includes one instance for duplicate elements, effectively deduping set
	union(otherSet: Set) {
		let unionSet = new Set();
		this.values().forEach(value => unionSet.add(value));
		otherSet.values().forEach(value => unionSet.add(value));
		return unionSet;
	}

	// given two sets, this returns a new set with the elements that exist in both sets
	intersection(otherSet: Set) {
		let intersectionSet = new Set();
		let values = this.values();
		for (let i = 0; i < values.length; i++) {
			if (otherSet.has(values[i])) {
				intersectionSet.add(values[i]);
			}
		}
		return intersectionSet;
	}

	// improving on intersection logic
	// fewer iteration means a cheaper procesing cost
	// optimizing our code by iterating on smaller set
	intersectionPerformace(otherSet: Set) {
		const intersectionSet = new Set();
		const values: any[] = this.values();
		const otherValues: any[] = otherSet.values();

		let smallSet: any = values;
		let biggerSet: any = otherValues;

		// find smaller set
		if (smallSet.length - biggerSet.length > 0) {
			smallSet = otherValues;
			biggerSet = values;
		}

		smallSet.forEach(value => {
			if (biggerSet.includes(value)) {
				intersectionSet.add(value);
			}
		});

		return intersectionSet;
	}

	// given two sets, this returns a new set with all the elements that exist in first set
	// and do not exist in second set
	// NOTE: performace version can be done for this operation as well
	difference(otherSet: Set) {
		const differenceSet = new Set();
		this.values().forEach(value => {
			if (!otherSet.has(value)) {
				differenceSet.add(value);
			}
		});
		return differenceSet.values();
	}

	// this confirms whether a given set is a subset of another set
	isSubsetOf(otherSet: Set) {
		if (this.size() >= otherSet.size()) return false;
		let isSubSet = true;

		this.values().every(value => {
			if (!otherSet.has(value)) {
				isSubSet = false;
				return false;
			}
			return true;
		});
		return isSubSet;
	}
}

/**
 * TEST:
let set = new fromSet.Set();
log(set.add(1));
log(set.add(2));
log(set.add(3));
log(set.add(4));
 */

/**
  * TEST Union:
let set = new fromSet.Set();
console.log('set1');

log(set.add(1));
log(set.add(2));
log(set.add(3));
log(set.add(4));
log(set.values());      // ["1", "2", "3", "4"]

let set2 = new fromSet.Set();
console.log('set2');
log(set2.add(0));
log(set2.add(3));
log(set2.add(4));
log(set2.add(5));
log(set2.add(6));
log(set2.values()); // ["0", "3", "4", "5", "6"]

console.log('Union:');
log(set.union(set2).values());  // ["0", "1", "2", "3", "4", "5", "6"]

log(set.intersection(set2)); // ["3", "4"]
*/
