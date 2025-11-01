let abcd=document.querySelector("#abcd");

window.addEventListener("mousemove", (val)=>{
    

    abcd.style.top=val.clientY +"px";
    abcd.style.left=val.clientX +"px";
})


let nav = document.querySelector(".nav");
nav.addEventListener("click", (evt)=>{
    alert("Nav is clicked");
})

let ul = document.querySelector("ul");
ul.addEventListener("click", (evt)=>{
    evt.target.classList.toggle("lt");
})