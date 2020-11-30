import { js as Beautify } from 'js-beautify';

const code = {
  snippet : `
  const sameFrequency = (num1, num2) => {
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();
    const intCount1 = {};
    const intCount2 = {}; 

    for(let i = 0; i < strNum1.length; i++){
      intCount1[strNum1[i]] = (intCount1[strNum1[i]] || 0) + 1;
    }

    for(let j = 0; j < strNum1.length; j++){
      intCount2[strNum2[j]] = (intCount2[strNum2[j]] || 0) + 1
    }

    for(let key in intCount1){
      if(intCount1[key] !== intCount2[key]) return false;
    }
    return true;
  }

  return [
    'sameFrequency(182, 281): ' + sameFrequency(182, 281),
    'sameFrequency(34, 14): ' + sameFrequency(34, 14),
    'sameFrequency(3589578, 5879385): '+ sameFrequency(3589578, 5879385),
    'sameFrequency(22, 222): '+ sameFrequency(22, 222),
  ].join(' \\n');
  `,
  beautyCode: () => Beautify(code.snippet, { indent_size: 2, space_in_empty_paren: true })
};

export default code;