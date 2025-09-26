
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



// let btn = document.querySelector("#btn");
// let ipt = document.querySelector("#ipt");

// btn.addEventListener("click", function(){
//     ipt.click();
// });

// ipt.addEventListener("change", function(evt){
//     const file = evt.target.files[0];
//     if(file){
//         btn.textContent = file.name;
//     }
// });

let form = document.querySelector("form")
let inputs =document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", function(evt){
    evt.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");
 
    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", "https://images.unsplash.com/photo-1729106657786-ef318f75e365?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8");


    let h3 = document.createElement("h3");
    let h5 = document.createElement("h5"); 
    let p = document.createElement("p");

    h3.textContent = "John Doe";
    h5.textContent = "Exceller"
    p.textContent = "This is dummy profile of John Doe in which he do nothing for clients nothing and mostly do somthing for nothing and actully do anything for something : Exceller is a profile where profiler "



    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);


    main.appendChild(card);

    















})