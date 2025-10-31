let btn= document.querySelector("button");
let para= document.querySelector("p");

function clickOne(){
    para.style.backgroundColor="purple";
    para.style.border= "1px solid purple";
    para.style.color="black";
    btn.style.backgroundColor="red";
    document.body.style.backgroundColor="gray"
    btn.textContent="Double click for reset"

}
btn.addEventListener("click", clickOne)

// btn.removeEventListener("click", clickOne);