let inp = document.querySelector("input");

// inp.addEventListener("input", (evt)=>{

// // console.log(evt)
//     if(evt.data !== null) return console.log(evt.data)


    
// })

let count=0;
inp.addEventListener("input", (evt)=>{
    h3.textContent=evt.target.value; 
    
    
    while(evt.target.value !==null){
        count++;
        break;

    }
    p.textContent=`You have typed ${count} character(s).`;

    
})

let h3 = document.createElement("h3");
let div= document.createElement("div");
let p=document.createElement("p");
h3.style="padding:10px; color:red; font-size:1rem";

div.classList.add("box");
document.querySelector("section").append(div);
div.style="width:100vw; height:fit-content; margin-top:10px; align-item:center; padding:10px; border:2px solid purple; box-shadow:2px 2px 10px gray;";

div.append(h3);
div.append(p);




