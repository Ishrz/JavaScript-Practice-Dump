let section = document.querySelector("section");



document.addEventListener("keydown",(val)=>{
    // if(val.key === " "){
    //     section.textContent="SPC";
    // }else
    // section.textContent=val.key;

    (val.key===" ") ? section.textContent="SPC" : section.textContent=val.key;

})