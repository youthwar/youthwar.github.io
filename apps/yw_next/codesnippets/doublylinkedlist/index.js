export default `
const linkedList = {
  head: {
    value: 'a',
    previous: null,
    next: {
      value: 'b',
      previous: {
        value: 'a',
        previous: null
      },
      next: {
        value: 'c',
        previous: {
          value: 'b',
          next: 'c'
        },
        next: null
      }
    }
  }
}

console.log(linkedList);
`;
