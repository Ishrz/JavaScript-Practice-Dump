// let arr = [1,2,3,4,5,8,6,77];
// let newarr = arr.filter( function(val){
//             if( val > 4) return true;
// });
// console.log(newarr);

//reduce:
let arr = [1,2,3,4,5,6];
let newarr=arr.reduce( function( accu, val){
    return accu + val;
},1); //accu initial value 1

console.log(newarr);



