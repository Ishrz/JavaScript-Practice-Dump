let img =document.createElement("img");
// console.log(img)
img.src="https://images.unsplash.com/photo-1761833199030-3e2c34a76523?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774"

document.querySelector("div").prepend(img);
img.classList.add("placeholder");