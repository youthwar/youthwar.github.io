export default `
const exampleArray = new Array(3);

exampleArray[0] = 'a';
exampleArray[1] = 'b';
exampleArray[2] = 'c';

console.log(exampleArray); // origin

exampleArray.push('d') // O(1);

console.log(exampleArray);

console.log(exampleArray.pop()); // O(1) returns 'd'

console.log({exampleArray});

exampleArray.unshift('-z');
console.log(exampleArray);

console.log(exampleArray.shift()) // O(n);

console.log(exampleArray);
`;
