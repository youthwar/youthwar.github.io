import { js as Beautify } from 'js-beautify';

const code = {
  snippet : `
  const areThereDuplicates = (arr) => {
    arr.sort((a,z) => a - z);
    let start = 0;
    let next = 1;
    while (next < arr.length) {
      if(arr[start] === arr[next]) return true;
      start++;
      next++;
    }
    return false;
  };

  return [
    '[1,2,3] is: ' + areThereDuplicates([1,2,3]),
    '[1,2,2] is: ' + areThereDuplicates([1,2,2]),
    '["a","B","A"] is: ' + areThereDuplicates(["a","B","A"]),
  ].join(' \\n');

  `,
  beautyCode: () => Beautify(code.snippet, { indent_size: 2, space_in_empty_paren: true })
};

export default code;