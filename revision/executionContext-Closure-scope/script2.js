function createToaster(config){
    return function(notification){
        let div=document.createElement("div");
        div.classList= `fixed p-4 max-w-xs w-full ${(config.theme=== "dark"? "text-gray-500 bg-black":"text-gray-600 bg-white")} rounded-xl shadow-xl border-l-4 border-emerald-500 mt-1 text-sm  ${(config.positionX === "right"? "right-10" : "left-10")} ${(config.positionY === "top")? "top-5": "bottom-10" } `;
        
        div.textContent=notification;
        document.body.appendChild(div);
    
    
        setTimeout(()=>{
            document.body.removeChild(div);
        }, config.duration*1000)
    
    
    
    
    }
}

let toaster=createToaster({
    positionX: "right",
    positionY: "top",
    theme:"dark",
    duration: 3,
});

toaster("this is my dummy notification for toaster created by js with the help of closures and setTimeout");