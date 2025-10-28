//discount calcuator using HOF
function discount(dis){
    return function(price){
        return price - price * (dis/100);
    }
}

let ten= discount(10);
let half= discount(50);

console.log(ten(100));
console.log(half(500));