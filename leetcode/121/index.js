/*최초풀이
function maxProfit(){
    var r=  Math.random()*10;
    r = Math.floor(r);
    var a=new Array(r);
    for(i=0; i<a.length; i++){ 
    	a[i]= Math.floor(Math.random()*10);        
}
var tmp=10;
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


/**다른 사람의 풀이 */

var maxProfit = function (prices) {
    var length = prices.length,
        min = Infinity,
        res = -Infinity;

    for (var i = 0; i <= length - 1; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] > min && prices[i] - min > res) {
            res = prices[i] - min;
        }
    }

    if (isFinite(res)) {
        return res;
    } else {
        return 0;
    }
};