let section=document.querySelector("section");
let input = document.querySelectorAll("input");
let form=document.querySelector("form");
let crouser=document.querySelector(".crouser");

form.addEventListener("submit", function(evt){

evt.preventDefault();



let card = document.createElement("div");
let profile = document.createElement("div");
let img= document.createElement("img");
let h3=document.createElement("h3");
let h5=document.createElement("h5");
let p= document.createElement("p");

img.setAttribute("src", input[0].value);
h3.textContent=input[1].value;
h5.textContent=input[2].value;
p.textContent=input[3].value;


card.classList.add("card")
profile.classList.add("profile");
img.classList.add("img");

profile.append(img);
card.append(profile);
card.append(h3);
card.append(h5);
card.append(p);

crouser.append(card)

input.forEach(val=>{
    if( val.type !== "submit") val.value="";
})

})





