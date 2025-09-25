
let h1 =document.querySelector("h1");
window.addEventListener("keydown", function(evt){
    console.log(evt.key);
    if(evt.key === " "){
        h1.textContent = "SPACE";
    }
    else {
        h1.textContent = evt.key
    }
    
})