let obj={
    name:"shaikh",
    age:25,
    gender:"male",
    address:{
        city:"pune",
        state:"MH",
    },
};

console.log(obj);

let obj2=JSON.parse(JSON.stringify(obj))
console.log(obj2);
