// let multiply =(a,b)=> a*b;
// console.log(multiply(2,4));

// function fnc(name="Guest"){
//     console.log("Hi",name,"yolo","tata");

// }
// fnc();

// function scoreFun(...scores){
//     let total=null;
//     for(let i=0;i<scores.length;i++){
//         total+=scores[i];
//     }
//     return total;
// }

// let result=scoreFun(1,2,3,4,5);
// console.log(result);

// function fnc(...scores){
//     total=0;
//     scores.forEach( function(val){
//         total+=val;
//     })
//     return total;
// }

// let result=fnc(1,2,3,4,5);
// console.log(result);


// let fnc=(...scores)=> {
//     let total=0;
//     scores.forEach((val)=> total+=val )
//     return total;
// }
// console.log(fnc(1,2,3,4,5));


// function checkAge(age){
//     if (age<18) return "Too young"
//     return "Adult";
// }

// console.log(checkAge(20));

// function fnc(){
//     return;
// }
// console.log(fnc());

// let fnc= function(){
//     return "hello";
// }
// console.log(fnc());

// function fnc( f ){
//     console.log(f());

// }

// fnc( function(){
//     return "hello"
// } )

// let total=0;
// function addT(num){
//     let nTotal=total;
//     nTotal+=num;
//     return nTotal;
// }
// console.log("new total=",addT(20));
// console.log("Old total=",total);



// function fnc(){
//      let count=0;
//      console.log("count from main fnc",count)
//     return function(){
//         count++;
//         console.log("count from return fnc",count);
        
//     }
// }

// let counter= fnc();
// counter();
// counter();
// let counter2=fnc();
// counter();
// counter2();
// counter= fnc();
// counter();

// function init(){
//     console.log("initiated");
// }

// (function init(){
//     console.log("initiated from IIFE")
// })();

// weight*(height*height)

// let userWeight=70;
// let userHeight= 1.7;

// function bmi(w,h){
//     return totalbmi= parseFloat((w/(h*h)).toFixed(2));
// }

// let result=bmi(userWeight,userHeight);
// console.log(result);
// console.log(typeof result);


// discountPrice=(discount/price)*100, sellingPrice=price-discountPrice 


// function discount(dis, price){
//     let discountPrice=0;
//     discountPrice=price *(dis/100);
//     console.log("dicounted price=",discountPrice);
//     console.log(`product price ${price} After discount of ${discountPrice} you get it at ${price-discountPrice}`);
// }

// discount(15 , 150);

// function discountCalc(discount){
//     return function(price){
//         return price-(price*(discount/100));
//     }
// }

// let discounter15=discountCalc(15)
// console.log(`Your Discounted price ${discounter15(150)}`);
// let discounter18=discountCalc(18);
// console.log(`Your Discounted price ${discounter18(150)}`);



