import { js as Beautify } from 'js-beautify';

const code = {
  snippet : `
  const maxSumSubArr = (arr, numOfValues) => { 
    if (arr.length < numOfValues) return null;
 
    let total = 0;
    for (let i=0; i<numOfValues; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = numOfValues; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-numOfValues];
       total = Math.max(total, currentTotal);
    }
    return total;
  } 

  return [
    'maxSumSubArr([100,200,300,400], 2) is: ' + maxSumSubArr([100,200,300,400], 2),
    'maxSumSubArr([-1,34,21,18, -43], 3) is: ' + maxSumSubArr([-1,34,21,18, -43], 3),
    'maxSumSubArr([-3,3,0,6,-1, 82],4) is: ' + maxSumSubArr([-3,3,0,6,-1, 82],4),
    'maxSumSubArr([1,3,3,5,6,-7,10,-12,19], 5) is: ' + maxSumSubArr([1,3,3,5,6,-7,10,-12,19], 5)
  ].join('\\n');
  `,
  beautyCode: () => Beautify(code.snippet, { indent_size: 2, space_in_empty_paren: true })
};

export default code;