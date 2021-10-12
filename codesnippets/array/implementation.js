export default `
class scratchArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length -1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift(index) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }

  delete(index) {
    this.shift(index);
  }
}

const newArray = new scratchArray();
console.log(newArray);

newArray.push('hey');
console.log(newArray);

newArray.push('you');
console.log(newArray);

newArray.push('!');
console.log(newArray.pop());

newArray.push('awesome');
console.log(newArray);

newArray.delete(2)
console.log(newArray);

`;
