function clickLimitter(){
    let click =0;
    return function(){
        if(click <5){
            click++;
            console.log(`clicked : ${click} times`);
        }
        else{
            console.log("limit khtam");
        }
    };
}

let fnc=clickLimitter();
fnc();
fnc();
fnc();
fnc();
fnc();
fnc();
click=0;
fnc();
