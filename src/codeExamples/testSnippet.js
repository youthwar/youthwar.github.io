import { js as Beautify } from 'js-beautify';

const code = {
  snippet : `
  const test = () => { 
    console.log('hi'); 
    return 'max'; 
  } 

  return test();
  `,
  beautyCode: () => Beautify(code.snippet, { indent_size: 2, space_in_empty_paren: true })
};

export default code;