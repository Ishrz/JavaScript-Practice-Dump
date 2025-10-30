let li= document.querySelectorAll("ol li:nth-child(2n)");

console.log(li);

li.forEach(function(val){
    val.classList.add("test");
})

