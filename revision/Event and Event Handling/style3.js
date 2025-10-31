let h =document.querySelector("h3");
// let dev = document.querySelectorAll("option");
let sel= document.querySelector("select");

sel.addEventListener("change", (evt)=>{
    let result= evt.target.value
    h.textContent= ` Your Selected Device is ${result}`;
})

