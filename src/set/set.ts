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
}

/**
 * TEST:
let set = new fromSet.Set();
log(set.add(1));
log(set.add(2));
log(set.add(3));
log(set.add(4));
 */
