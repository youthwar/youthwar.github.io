const snippet = `
  const longestCommonPrefix = (strs) => {
    if (strs.length === 0 ) return '';

    // set the prefix to the first string.
    let prefix = strs[0];

    for(let i = 1; i < strs.length; i++) {
      
      while(strs[i].indexOf(prefix) != 0) {
        prefix = prefix.substring(0, prefix.length - 1);
      }
    }

    return prefix;
  }

  const test1 = ['flower','flow','flight'];
  const test2 = ['car', 'boat', 'animal']
  console.log({test1: longestCommonPrefix(test1)})
  console.log({test2: longestCommonPrefix(test2)})

`;

export default snippet;

