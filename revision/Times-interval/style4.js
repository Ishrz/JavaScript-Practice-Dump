let msg=document.querySelector(".msg");
let tmout=setTimeout(()=>{
    msg.style.display="none";
    clearTimeout(tmout);
},3000);
