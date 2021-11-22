export default `
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.last) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }
    const hold = this.first;
    this.first = this.first.next;
    this.length--;

    return hold;
  }
}

const q = new Queue();
q.enqueue('max');
q.enqueue('hendrix');
q.enqueue('sammy');

console.log(q);

console.log(q.dequeue());

console.log(q);
`;
