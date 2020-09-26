/* 최초 풀이
function maxProfit(){
    var r=  Math.random()*300000;
    r = Math.floor(r)+1;
    var a=new Array(r);
    for(i=0; i<a.length ; i++){ 
    	a[i]= Math.floor(Math.random()*100000);        
}
var tmp=100000;
var index;
for(i=0;i<a.length;i++){
	if(tmp < a[i]){
	tmp = a[i];
index = i;
}
}
var max=0;
for(i=index+1;i<a.length;i++){
   if(index == a.length-1){
	max = 0;
    break;
}
if(a[i] - a[index] > max){
  max = a[i]-a[index];
}
}
return max;
};

*/

/* 다른사람의 풀이 */

/**
 * @param {number[]} prices
 * @return {number}
 * More like greedy. Reserve the partial optimal and replace it when
 * a better result is found.
 * With complextity of O(n)
 */
const maxProfit = (prices) => {
    let result = 0; 

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[i+1]) {
            result += prices[i+1] - prices[i];
        }
    }

    return result;
};