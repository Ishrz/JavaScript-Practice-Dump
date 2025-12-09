function afterDelay(time,cb){
    setTimeout(()=>{
        cb()
    },time)
}

afterDelay(3000,function(){
    console.log("callback executed")
})


let delay=(time,cb)=> setTimeout( ()=> cb() ,time)

delay(3000, ()=> console.log("executed from fat arrow"))