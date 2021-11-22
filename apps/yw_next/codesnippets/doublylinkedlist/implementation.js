export default `
class Node {
  constructor(value) {
    this.value = value; 
    this.next = null; 
    this.prev =  null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = this.newNode;
    this.head = newNode;
    this.length++;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== counter) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  insert(index,value) {
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index-1);
    const follower = leader.next;
    leader.next = newNode;
    follower.prev = newNode;

    newNode.prev = leader;
    newNode.next = follower;

    this.length++;

  }
}

const dll = new DoublyLinkedList(10);

dll.append(6);

dll.prepend(2);

dll.insert(1, 3);
`;
