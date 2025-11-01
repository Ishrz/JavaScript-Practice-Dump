let email=document.querySelector("#email");


let frm= document.querySelector("form");
frm.addEventListener("submit", function(evt){
    evt.preventDefault();

    const regex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let ans =regex.test(email.value);

    // if(ans === false){
    //     document.querySelector(".hide").style.display="initial";
    // }else{
    //     document.querySelector(".hide").style.display="none";
    // }

    ((ans !== true)) ? document.querySelector(".hide").style.display="initial" : document.querySelector(".hide").style.display="none";

})