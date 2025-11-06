// let obj={
//     name:"shaikh",
//     age:25,
//     city:"pune",
// };

// function abc(){
//     console.log(this);
// }

// abc.call(obj);

// let obj={
//     name:"shaikh",
//     age:25,
//     city:"pune",
// };

// function abc(m1,s1,r1){
//     console.log(this, m1,s1,r1);
// }

// let arg1=5;
// let arg2=5;
// let arg3=5;

// abc.apply(obj, [arg1,arg2,arg3] );



let obj={
    name:"shaikh",
    age:25,
    city:"pune",
};

function abc(z,x,c){
    console.log(this,z,x,c);
    console.log(`Hello ${this.name}`);
};

let bindFnc=abc.bind(obj,1,5,6);

bindFnc();

