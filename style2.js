let h2 = document.querySelector("h2");
h2.addEventListener("click", function(){
    h2.style.color = "red";

})

document.querySelector("p")
.addEventListener("click", function(){
                this.textContent = "Surprisse hahahah";
                this.style.color = "red";
})