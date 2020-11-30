import { js as Beautify } from 'js-beautify';

const code = {
  snippet : `
  const arr1 = [1,4,3,6,-2,-6,8,35,6,34];
  const arr2 = arr1.slice();
  
  arr1.sort((a,z) => a - z);
  arr2.sort((a,z) => z - a);
  
  return [
    'Asc Sort: ' + arr1,
    'Desc Sort: ' + arr2,
  ].join(' \\n')
  
  `,
  beautyCode: () => Beautify(code.snippet, { indent_size: 2, space_in_empty_paren: true })
};

export default code;