export default `
const exampleArray = ['a', 'b', 'c'];

exampleArray.push('d') // O(1);

logger(exampleArray);

logger(exampleArray.pop()); // O(1) returns 'd'

logger({exampleArray});
`;
