// let h2 = document.querySelector("h2");
// h2.addEventListener("click", function(){
//     h2.style.color = "red";

// })

// document.querySelector("p")
// .addEventListener("click", function(){
//                 this.textContent = "Surprisse hahahah";
//                 this.style.color = "red";
// })

// let ip = document.querySelector("input");
// ip.addEventListener("input", function(evt){
//     if(evt.data !== null){
//         console.log(evt.data);
//    }
    
// })


let slc = document.querySelector("select");
 let h2= document.querySelector("h2");

slc.addEventListener("change", function(evt){
h2.textContent= `${evt.target.value} is selected`;
    
})



