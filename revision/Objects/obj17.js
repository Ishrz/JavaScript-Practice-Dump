const obj1={
    info:{
        score:80,
    },
};

console.log("orignal object before operation = ",obj1);
// let clone = {...obj1};
// let clone= Object.assign({} ,obj1);

let clone = JSON.parse(JSON.stringify(obj1));
console.log("clone object before operation = ",clone);

clone.info.score=100;
console.log("clone object = ",clone);
console.log("orignal object = ",obj1);
