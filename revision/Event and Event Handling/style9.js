let abcd=document.querySelector("#abcd");

window.addEventListener("mousemove", (val)=>{
    

    abcd.style.top=val.clientY +"px";
    abcd.style.left=val.clientX +"px";
})