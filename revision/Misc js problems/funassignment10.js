//clousers use
function counter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}

console.log("--------new counter created for c-----------");
let c = counter();
console.log(c());
console.log(c());

console.log("--------new counter created for d-----------");

const d = counter();
console.log(d());
console.log(d());
console.log(d());
console.log("--------for c-----------");
console.log(c());
console.log(c());
console.log("--------for d-----------");
console.log(d());
console.log(d());
console.log("--------new counter created for a-----------");
let a= counter();
console.log(a());

console.log("--------new counter created for once again d-----------");
d= counter(); //error 
console.log(d());

