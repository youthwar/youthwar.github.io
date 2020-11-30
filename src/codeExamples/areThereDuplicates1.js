import { js as Beautify } from 'js-beautify';

const code = {
  snippet : `
  const areThereDuplicates = (arr) => { 
    let valMap = {};
    arr.forEach((val) => {
      valMap[val] = (valMap[val] || 0) + 1
    });
    const valKeys = Object.keys(valMap);
    for(let i = 0; i < valKeys.length; i++) {
      if (valMap[valKeys[i]] > 1) return true;
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