import { js as Beautify } from 'js-beautify';

const code = {
  snippet : `
  const findLongestSubstr = (str) => { 
    let longest = 0;
    let seen = {};
    let start = 0;
 
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    
    return longest;
  } 

  return [
    "findLongestSubstr('rithmschool') is " + findLongestSubstr('rithmschool'),
    "findLongestSubstr('this is awesome') is " + findLongestSubstr('this is awesome'),
    "findLongestSubstr('the cat in the hat') is " + findLongestSubstr('the cat in the hat'),
    "findLongestSubstr('cccccccc') is " + findLongestSubstr('cccccccc'),
    "findLongestSubstr('') is " + findLongestSubstr(''),
  ].join('\\n');
  `,
  beautyCode: () => Beautify(code.snippet, { indent_size: 2, space_in_empty_paren: true })
};

export default code;