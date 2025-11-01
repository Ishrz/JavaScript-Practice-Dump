let abcd=document.querySelector("#abcd");

window.addEventListener("mousemove", (val)=>{
    

    abcd.style.top=val.clientY +"px";
    abcd.style.left=val.clientX +"px";
})


let nav = document.querySelector(".nav");
nav.addEventListener("click", (evt)=>{
    alert("Nav is clicked");
})

//  hum output me nav par click karege to alert me aayga nav is click par agar nav ke kisi children par click karege to yani button ya a tags par bhi click karege to nav ka listener chal jayga aur nav is clicked aa jayga. due to event bubbling.