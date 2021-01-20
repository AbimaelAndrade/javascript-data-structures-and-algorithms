export default class Stack<T> {
  constructor(private _count: number = 0, private _items: any = {}) {}

  size(): number {
    return this._count;
  }

  isEmpty(): boolean {
    return this._count === 0;
  }

  push(element: T): void {
    this._items[this._count] = element;
    this._count++;
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const index = this._count - 1;
    const result = this._items[index];
    delete this._items[index];
    this._count--;

    return result;
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this._items[this._count - 1];
  }

  clear(): void {
    this._count = 0;
    this._items = {};
  }

  toString() {
    if (this.isEmpty()) return '';

    return JSON.stringify(Object.values(this._items));
  }
}
