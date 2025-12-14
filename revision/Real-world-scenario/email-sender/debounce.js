
const debounce=(fn,delay)=>{
    let timer;
    return function(){

        clearTimeout(timer)
        timer=setTimeout(fn,delay)
    }
}





document.querySelector("#search")
.addEventListener('input', debounce(()=>{
    console.log("chala")
},500))