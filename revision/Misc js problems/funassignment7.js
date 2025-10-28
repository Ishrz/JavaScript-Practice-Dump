// convert the given function into pure function.
let total = 0;
function addToTotal(num) {
    let newtotal= total;
    newtotal += num;
    return newtotal;
}
let newtotal2= addToTotal(20);
console.log("total = "+ total);
console.log("newtotal = " +newtotal2);

