/**
 * Queue is first come first serve principle. FIFO
 */
export class Queue {
  count: number;
  lowestCount: number;
  items: {};

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(item) {
    this.items[this.count] = item;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const itemRemoved = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return itemRemoved;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.lowestCount];
    }
    return null;
  }

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
