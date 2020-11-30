import { js as Beautify } from 'js-beautify';

const code = {
  snippet : `
  const isThereAnAveragePair = (arr, targetAverage) => {
    // this is crucial
    arr.sort((a,z) => a - z);

    let start = 0;
    let end = arr.length - 1;
    while(start < end) {
      let average = (arr[start] + arr[end]) / 2;
      if (average === targetAverage) return true;
      else if (average < targetAverage ) start ++;
      else end--;
    }
    return false;
  };

  return [
    '([1,2,3], 2.5) is: ' + isThereAnAveragePair([1,2,3], 2.5),
    '([-1,0,3,4,5,6], 4.1) is: ' + isThereAnAveragePair([-1,0,3,4,5,6], 4.1),
    '([],4) is: ' + isThereAnAveragePair([],4),
    '([1,3,3,5,6,7,10,12,19], 8) is: ' + isThereAnAveragePair([1,3,3,5,6,7,10,12,19], 8),
  ].join(' \\n');

  `,
  beautyCode: () => Beautify(code.snippet, { indent_size: 2, space_in_empty_paren: true })
};

export default code;