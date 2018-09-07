/**
 * Deque allows item to be added and removed from both ends of the Queue
 * Only addFront method is new rest are similar to Queue
 */
export class Deque {
  count: number;
  lowestCount: number;
  items: {};

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  addFront(item) {
    if (this.isEmpty()) {
      this.addBack(item);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = item;
    } else {
      for (let i = this.count; i > 0; i++) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = item;
    }
  }

  addBack(item) {
    this.items[this.count] = item;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const itemRemoved = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return itemRemoved;
  }
  removeBack() {
    if (this.isEmpty()) return null;
    const lastItem = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return lastItem;
  }

  peekFront() {
    if (!this.isEmpty()) {
      return this.items[this.lowestCount];
    }
    return null;
  }
  // same peek as in Stack
  peekBack() {}

  size(): number {
    return this.count - this.lowestCount;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
}
