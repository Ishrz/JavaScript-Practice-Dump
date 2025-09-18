// let arr= [1,2,3,4,56];
// console.log(arr);

// arr.pop();
// console.log(arr);
// arr.unshift(30);
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.push(30);
// console.log(arr)

// const names_arr= ["shaikh","khan","pthan"];
// console.log(names_arr);

// names_arr.push("hello");
// console.log(names_arr);
// names_arr.unshift("sayyed");
// console.log(names_arr);
// names_arr.pop();
// console.log(names_arr);

// let newArr= names_arr.slice(0,2);
// console.log(newArr);
// let newArr2= names_arr.slice(1,3);
// console.log(newArr2);

// console.log(names_arr);

// let newArr3= names_arr.splice(1,2,"Hello");
// console.log(names_arr);
// console.log(newArr3);

// let names_arr2 = names_arr;
// console.log(names_arr2);
// names_arr2.push("shaikh");
// console.log( names_arr);

// let names_arr3= [...names_arr];
// console.log(names_arr3);

// names_arr3.pop();
// console.log("new array with spread op pop oprntion perfomed");
// console.log(names_arr3);
// console.log("old array copied");
// console.log(names_arr);

console.log("--------------------------New Oprn--------------------------------------");

let arr= [1,3,4,63,6,2];
arr.sort();
console.log(arr)
console.log(typeof(arr.sort()))

let arrN= ["zalok","alok","block","malok"];
arrN.sort();
console.log(arrN);


console.log(arr)
let arr2= arr.sort(function(a,b){
    return b-a
}
)
console.log(arr2)

arr.sort((a,b) =>
b-a
)
console.log(arr);

arr.reverse();
console.log(arr)

console.log(arrN);
arrN.reverse();
console.log(arrN);

console.log(typeof([50,6,40,1]));
let a= [50,6,40,1].sort();
console.log()
console.log(typeof(a))
