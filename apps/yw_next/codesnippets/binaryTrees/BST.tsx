const snippet = `
class BST {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    const addNode = (side) => {
      if (!current[side]) {
        current[side] = newNode;
        return this;
      }
      current[side] = newNode;
    };

    while (true) {
      if (value === current.val) return this;
      if (value < current.val) addNode('left');
      else addSide('right');
    }

  }
}
`;

export default snippet;