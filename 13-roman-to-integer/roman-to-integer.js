/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let arr = s.split('');
let sum =0;

let obj = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
}

let i=0;

while(i<arr.length){
    if(obj[arr[i]]<obj[arr[i+1]]){
        sum+=obj[arr[i+1]]-obj[arr[i]];
        i += 2;
    }else{
        sum+=obj[arr[i]];
        ++i;
    }
}
return sum;
};