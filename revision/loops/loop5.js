let userInp=prompt("enter any number");
let userInput= Number(userInp);
for(let i=1; i<=userInput; i++){
    if(i%2===0){
        console.log(`${i} This is even Number`);
    }
    else{
        console.log(`${i} This is odd number`);
    }
}
