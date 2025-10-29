let arr=[5,12,8,20,3];
console.log(`unsorted Array ${arr}`);
let arrN=arr.filter(function(val){
    if(val>10) return true;
})
console.log(`number grater than 10 ${arrN}`);