import { js as Beautify } from 'js-beautify';

const code = {
  snippet : `
  const isAnagram = (first, second) => {
    if (first.length !== second.length) return false;
    const valObj = {};

    for(let i = 0; i < first.length; i++) {
      let letter = first[i];
      valObj[letter] ? valObj[letter] += 1 : valObj[letter] = 1;
    }

    for(let i = 0; i < second.length; i++) {
      let letter = second[i];
      if (!valObj[letter]) return false;
      valObj[letter] -= 1;
    }
    return true;
  }
  return isAnagram('cinema', 'iceman');
  `,
  beautyCode: () => Beautify(code.snippet, { indent_size: 2, space_in_empty_paren: true })
};

export default code;
