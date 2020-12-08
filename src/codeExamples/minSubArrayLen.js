import { js as Beautify } from 'js-beautify';

const code = {
  snippet : `
  const minSubArrayLen = (arr, totalSum) => { 
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < arr.length) {

      if(total < totalSum && end < arr.length){
        total += arr[end];
        end++;
      }

      else if(total >= totalSum){
        minLen = Math.min(minLen, end-start);
        total -= arr[start];
        start++;
      } 
      
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  } 

  return [
    'minSubArrayLen([2,3,1,2,4,3],7) is: ' + minSubArrayLen([2,3,1,2,4,3],7),
    'minSubArrayLen([2,1,6,5,4],9) is: ' + minSubArrayLen([2,1,6,5,4],9),
    'minSubArrayLen([3,1,7, 11, 2, 9, 8, 21, 62, 33, 19], 52) is: ' + minSubArrayLen([3,1,7, 11, 2, 9, 8, 21, 62, 33, 19], 52) 
  ].join('\\n');
  `,
  beautyCode: () => Beautify(code.snippet, { indent_size: 2, space_in_empty_paren: true })
};

export default code;