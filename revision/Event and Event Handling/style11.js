let input= document.querySelector("input");
let span = document.querySelector("span");

input.addEventListener("input", (evt)=>{
    
    let inpt=input.value.length;
    
        span.textContent= 20 - inpt;
        if(span.textContent<=0){
            span.style.color="red";
        }else{
            span.style.color="green"
        }
    
})