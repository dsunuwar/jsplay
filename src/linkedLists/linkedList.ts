/**
 * LINKED LIST:
 * Linked list is a dynamic data structure that stores a sequence of data.
 * Dynamic, meaning that we can add or remove items from it at will and it will
 * grow as required.
 */
import { equals } from '../utils';
import { Node } from './linkedListNode';
import { log } from '../utils';

export default class LinkedList {
	count: number;
	head: any;
	equals: any;

	constructor(equalsFn = equals) {
		this.count = 0;
		this.head = null;

		// custom compare function if needed for comparing objects for example.
		this.equals = equalsFn;
	}

	// adds a new element to the end of the list
	push(element) {
		const node = new Node(element);
		let current;

		if (this.head === null) {
			// add first node
			this.head = node;
		} else {
			// append node after last node
			current = this.head;

			// get the last item
			while (current.nextElement !== null) {
				current = current.nextElement;
			}

			// and assign nex to new element to make the link
			current.nextElement = node;
		}
		this.count++;
	}

	// inserts a new element at a specified position in the list
	insert(element, index) {
		if (index >= 0 && index <= this.count) {
			const node = new Node(element);

			// insert at first position
			if (index === 0) {
				const current = this.head;
				node.nextElement = current;
				this.head = node;
			} else {
				let previous = this.getElementAt(index - 1);

				//
				if (!previous) return false;

				let current = previous.nextElement;
				node.nextElement = current;
				previous.nextElement = node;
			}
			this.count++;
			return true;
		}
		// position does not exist in the linked list
		return false;
	}

	// removes an item from a specified position in the list
	removeAt(index) {
		let current = this.head;
		if (index === 0) {
			// remove first element
			this.head = current.nextElement;
		} else {
			const previous = this.getElementAt(index - 1);
			// previous element does not exist
			if (!previous) return previous;

			current = previous.nextElement;
			previous.nextElement = current.nextElement;
		}
		this.count--;
		return current;
	}

	// helper method for node traversal
	private getElementAt(index: number): Node | null {
		if (index >= 0 && index < this.count) {
			// starting node is always head
			let node: Node = this.head;

			for (let i = 0; i < index && node !== null; i++) {
				node = node.nextElement;
			}
			return node;
		}
		return null;
	}

	// removes an element from the list
	remove(element) {
		const index = this.indexOf(element);
		return this.removeAt(index);
	}

	// returns the index of the element in the list.
	// return undefined if does not exist
	// helper method for remove
	private indexOf(element): number | -1 {
		let current = this.head;
		for (let i = 0; i < this.count && current !== null; i++) {
			// for complex object comparision, devs can passin their own
			// callback compare function
			if (this.equals(element, current.element)) return i;
			current = current.nextElement;
		}
		return -1;
	}

	// returns true if linked list is empty,
	// and false if the size of the linked list is bigger than 0
	isEmpty() {
		return this.size() === 0;
	}

	// returns the number of elements the linked list contains
	// it is similar to length property of array
	size() {
		return this.count;
	}

	// useful public method if list needs to be iterated outside of class
	getHead() {
		return this.head;
	}

	// returns string representation of the linked list.
	toString() {
		if (this.isEmpty()) return '';
		let objString = `${this.head.element}`;
		let current = this.head.nextElement;
		for (let i = 0; i < this.size() && current !== null; i++) {
			objString = `${objString}, ${current.element}`;
			current = current.nextElement;
		}
		return objString;
	}
}

/**
 * NOTE:
 * Disadvantage of Array data structure is that, size of the array is fixed in most languages.
 * Inserting  or removing items from the beginning or from the middle of the array is expensive, because the elements need to be shifted over.
 *
 * Linked lists store a a sequential collection of elements but, unlike arrays, in linked lists the elements
 * are not placed ontiguously in memory. We do not need to shift elements over when adding or removing elements.
 *
 * Some real world example of Linked lists are:
 * - A train consists of a series of vehicles.
 * - A scavenger hunt, where you have a clue and this clue is the pointer to nex clue.
 * - conga line.
 */
