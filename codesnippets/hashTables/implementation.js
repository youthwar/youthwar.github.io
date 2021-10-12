export default `
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this.hash(key);
    
    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
  }

  get(key) {
    const hash = this.hash(key);
    const bucket = this.data[hash];

    if (bucket) {
      for(let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].length) {
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keys.push(this.data[i][j][0]);
          }
        } else {
          keys.push(this.data[i][0][0]);
        }
      }
    }
    return keys;
  }
}

const exampleHashTable = new HashTable(5);
console.log(exampleHashTable)

exampleHashTable.set('yoda', 'jedi master');
exampleHashTable.set('anakin', 'jedi padawan');

console.log(exampleHashTable);

console.log(exampleHashTable.get('anakin'));

console.log(exampleHashTable.get('yoda'));

console.log(exampleHashTable.keys());
`;

