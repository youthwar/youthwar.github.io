export default `

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.length = 1;
    this.tail = this.head;
  }

  traverseToNode(index) {
    let counter = 0;
    let currentNode = this.head;

    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    } else if(index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToNode(index - 1);
    const holdingNext = leader.next;

    newNode.next = holdingNext;
    leader.next = newNode;
    this.length++;
  }

  delete(index) {
    if (index === 0) {
      const hold = this.head.next;
      this.head = hold;
      return this.length--;
    }

    const leader = this.traverseToNode(index - 1);
    const deleteHold = leader.next;

    leader.next = deleteHold.next;
    this.length--;
  }
}

const linkedList = new LinkedList(10);
console.log(linkedList);

linkedList.append(5);
console.log(linkedList);

linkedList.prepend(1);
console.log(linkedList);

linkedList.insert(2, 13);
console.log(linkedList);

linkedList.delete(2);
console.log(linkedList);

linkedList.delete(0);
console.log(linkedList);
`;

