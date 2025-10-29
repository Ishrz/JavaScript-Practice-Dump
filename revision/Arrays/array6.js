let arr=[10,20,30];
let arrN=arr.reduce(function(accumalator,val){
    return accumalator+val;
},0);
console.log(arrN);