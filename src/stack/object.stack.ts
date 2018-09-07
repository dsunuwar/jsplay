/**
 * Wouldn't it be better if we could access the element directly, use less memory space, 
 and still have all the elements organized the way we need to? For the scenario of a
 stack data structure in the JavaScript language, it is also possible to use a 
 JavaScript object to store the stack elements, keep them in order, and also 
 comply with the LIFO principle. 
 * Using Object,  complexity of time,  O(1)
 */

export class Stack {
  private count: number;
  private items: {};
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(item) {
    this.items[this.count] = item;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) return null;
    const lastItem = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return lastItem;
  }
  peek() {
    return this.items[this.count - 1];
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
}
