// console.log(this);

// function anc(){
//     console.log(this);
// }
// anc();


// let obj={
//     name: "shaikh",
//     name: "something",
//     age:25,
//     city: "pune",
//     sayName: function(){
//         console.log(this.name);
//     },
// };

// console.log(obj.sayName);
// obj.sayName();


// let h1= document.querySelector("h1");
// h1.addEventListener("click", function(){
//     console.log(this.style.color="red");
// })

let obj={
    name:"shaikh",
    age:25,
    sayName: function(){
        function defq(){
        console.log(this);
        }
        defq();
    },
};
obj.sayName();


// let obj={
//     name:"shaikh",
//     age:25,
//     sayName: function(){
//         let defq=()=>{
//         console.log(this);
//         }
//         defq();
//     },
// };
// obj.sayName();