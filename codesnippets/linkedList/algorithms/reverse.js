export default `
  class Node {
    constructor(value) {
      return {
        value, 
        next: null
      }
    }
  }

  class LinkedList {
    constructor(value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }

    append(value) {
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }

    reverse() {
      if (!this.head.next) {
        return this.head;
      }

      let first = this.head;
      this.tail = this.head;
      let second = first.next;

      while(second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }

      this.head.next = null;
      this.head = first;
      return this;
    }
  }

  const LL = new LinkedList(3);
  LL.append(5);
  LL.append(6);
  LL.append(7);

  console.log(LL);

  console.log(LL.reverse());

`;
