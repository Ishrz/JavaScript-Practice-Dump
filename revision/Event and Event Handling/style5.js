let btn = document.querySelector("#btn");
let inpt = document.querySelector("#inpt");


btn.addEventListener("click", function(){
    inpt.click();
})

inpt.addEventListener("change", (val)=>{
    let fileName=val.target.files[0];
    if(fileName){
        btn.textContent=fileName.name;
    } 
    else{
        btn.textContent=`Please Upload File`;
    }

})