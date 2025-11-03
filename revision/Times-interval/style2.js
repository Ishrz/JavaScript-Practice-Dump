count=10;
let itrvlclr=setInterval(function(){
    if(count>=1){
    count--;
    console.log(count);
    }
    else clearInterval(itrvlclr); 
},1000);