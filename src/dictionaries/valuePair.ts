/**
 * create simple key value pair
 */
export default class ValuePair {
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
