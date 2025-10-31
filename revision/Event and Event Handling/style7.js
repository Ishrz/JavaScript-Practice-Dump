let box=document.querySelector("#abcd");

box.addEventListener("mouseover", ()=>{
    box.style.backgroundColor="red";
})

box.addEventListener("mouseout", ()=>{
    box.style.backgroundColor="green";
})