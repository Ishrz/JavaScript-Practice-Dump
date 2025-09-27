let ipt = document.querySelector("input");
let count = document.querySelector("#count");

ipt.addEventListener("input",(evt)=>{
    let left = 20 - evt.target.value.length;
    count.textContent = left;
    if(left < 0){
        count.style.color = "red";
    }else{
        count.style.color = "black";
    }
})