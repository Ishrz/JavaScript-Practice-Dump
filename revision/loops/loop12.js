// function add(...nums){
//     let total=0;
//     for(let i=0; i<nums.length; i++){
//         total+=nums[i];
//     }
//     console.log(total);

    // nums.forEach( val =>{
    //     total+=val
    // })

    // nums2=nums.reduce((acc,val)=>{
    //     return acc+val;
    // },0)
    // console.log(nums2);
// }

// add(1,2,3,4)


// ( function(){
//     console.log("IIFE CALLED")
// })(); 

// (function outer(){
//     let a=25;
//     inner();
//     function inner(){
//         console.log(a)
//     }
// })();
  


// function remove(arr){
//     arr.pop();
//     return arr;
// }
// function add(arrN,name){
//     arrN.push(name);
//     return arrN;
// }

// let arr=["apple","guava","mango","banana"];
// console.log(`outer array`, arr);
// remove(arr);
// console.log(arr);

// add(arr,"grapes");
// console.log(arr)


// let obj={
//     name: "shaikh",
//     city: "pune",
//     age: 25
// }

// for( let k in obj){
//     console.log(`${k} : ${obj[k]}`)
// }


// function hOf(fnc){
//     fnc();
//     fnc();
// }
// hOf( function(){
//     console.log("Hello from callback function/argument wala function");
// })

// function pureFnc(val){
//     return val*=val;
// }

// let result=pureFnc(8);
// console.log(result);

// let val=5;

// function imFnc(data){
//     val=data+data;
// }
// let result=imFnc(3);
// console.log(val)

// let obj={
//     name:"shaikh",
//     age:25,
//     city:"pune",
// }

// function objD({name,age}={...obj}){
//     console.log(name, age);
// }

// objD(obj);


// let obj={
//     name:"shaikh",
//     age:25,
//     city:"pune",
//     sayName: function(){
//         console.log(this.name);
//         console.log(`from methode of obj with es5 function`);
//     }
// }

// obj.sayName();

// let obj2={
//     name:"shaikh",
//     age:25,
//     city:"pune",
//     sayName:()=>{
//         console.log(this.name);
//         console.log("from methode of obj with arrow function");
//     }
// }

// obj2.sayName();


// let arr=[2,5,6,4,3];

// let arr2=arr.map( val=> val*val);
// console.log(`new array : ${arr2}`);
// console.log(`old array : ${arr}`);


// let number=[1000,2000,3000];

// let num2=number.reduce( (acc,val)=> acc+val)

// let num2=number.reduce(function(acc,val){
//     return acc+val
// })

// console.log(number);
// console.log(num2);

// let obj={
//     name:"shaikh",
//     age:25,
//     address:{
//         coutry:"India",
//         city:{
//             pune:"nigdi"
//         }
//     }
// }

// console.log(obj)
// console.log(obj.address.city.pune)

// let pune=obj.address.city
// console.log(pune);

// let pune= obj.address["city"]
// console.log(pune);

// let ar=[ "khan","pthan","sh"];
// console.log(ar);

// let result=ar.some( val =>{
//     return val.length>3
// })
// console.log(`some condition` ,result)

// let arr2=["shaikh","kham", "khan", "loh"]

// let r=arr2.every( val =>{
//     return val.length>3;
// })

// console.log(`for every :  ${r}`);