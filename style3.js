
// let h1 =document.querySelector("h1");
// window.addEventListener("keydown", function(evt){
//     console.log(evt.key);
//     if(evt.key === " "){
//         h1.textContent = "SPACE";
//     }
//     else {
//         h1.textContent = evt.key
//     }
    
// })



let btn = document.querySelector("#btn");
let ipt = document.querySelector("#ipt");

btn.addEventListener("click", function(){
    ipt.click();
});

ipt.addEventListener("change", function(evt){
    const file = evt.target.files[0];
    if(file){
        btn.textContent = file.name;
    }
})