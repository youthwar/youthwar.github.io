export default `
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
} 

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  pop() {
    if (!this.top) return null;
    if (this.top === this.bottom) { 
      this.bottom = null;
    }

    const hold = this.top;
    this.top = this.top.next;
    this.length --;
    return hold;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const hold = this.top;
      this.top = newNode;
      this.top.next = hold;
    }

    this.length++;
    return this;
  }
}

const exampleStack = new Stack();
console.log(exampleStack);

exampleStack.push('maximiliano');
console.log(exampleStack);

exampleStack.push('youthwar');
console.log(exampleStack);

exampleStack.push('jedi');
console.log(exampleStack);

console.log(exampleStack.pop());
console.log(exampleStack);
`;
