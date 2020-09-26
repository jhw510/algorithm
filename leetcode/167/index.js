/**최초 풀이 */
function twoSum(numbers, target){
    
}

/**다른 사람의 풀이 */

var twoSum = function(numbers, target) {
    for(let i=0; i<numbers.length;i++) {
        for (let j = i + 1; j < numbers.length; j++) {
          let num1 = numbers[i];
          let num2 = numbers[j];
          if (num1 + num2 == target) {
            return [i + 1, j + 1];
          }
        }
      }
};