/**
 * Stack is LIFO struture
 * The easiest way to implement Stack is using Array to store its elements
 * But Arrays have complexity of time O(n)
 */
export class Stack {
  private items;
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1] || null;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size(): number {
    return this.items.length;
  }
}

/** Note:
 * When working with a large set of data (which is very common in real-world projects),
 * we also need to analyze what is the most efficient way of manipulating the data.
 * When working with arrays, most methods have a complexity of time O(n); What this means is that,
 * for most methods, we need to iterate through the array until we find the element we are looking for and,
 * in the worst-case scenario, we will iterate through all the positions of the array, where n is the size of
 * the array. If the array has more elements, it will take longer to iterate through
 * all elements compared to an array with fewer elements. In addition, an array is an
 * ordered set of the elements, and to keep the elements in order, it would need more
 * space in the memory as well.
 */
