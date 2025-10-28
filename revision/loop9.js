// let count=0;
// for(let i=1; i<=100; i++){
//     if(i%2 !== 0){
//         console.log(i);
//         count++;
//     }
//     if(count===5) break;
// }

let count=0;
let i=1;
while(i<=100){
    if(i%2===1){
        count++;
        console.log(i);
    }

    if (count === 5) break;
    i++;
}

