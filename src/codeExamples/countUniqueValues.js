import { js as Beautify } from 'js-beautify';

const code = {
  snippet : `
  const countUniqueValues = (arr) => { 
    if (arr.length === 0) return 0;

    const sortedArray = arr.sort((a,z) => a - z);
    let i = 0;
    for(let j = 1; j < sortedArray.length; j++) {
      if (sortedArray[i] !== sortedArray[j]) {
        i++;
        sortedArray[i] = sortedArray[j]
      }
    }
    return i + 1;
  };

  const sampleArray = [1,2,2,3,4,10,10,98, 4, 6, 23, 2];

  return [
    'Original array length is',
    sampleArray.length,
    'Unique values count is',
    countUniqueValues(sampleArray),
  ].join(' ');
  `,
  beautyCode: () => Beautify(code.snippet, { indent_size: 2, space_in_empty_paren: true })
};

export default code;