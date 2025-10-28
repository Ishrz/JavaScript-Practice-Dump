//use rest parameter to accept any number of scores and return the total.

function scores(...val){
    let val2=0;
    val.forEach(function (a){
        val2= val2+ a;
    });
    return val2;
    
}

let score=scores(10,20,22);
console.log("Totale scores = " + score);