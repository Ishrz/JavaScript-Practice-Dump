let MyPromise=function(val){
    return new Promise((res,rej)=>{
        let flag=val
        setTimeout(()=>{
            flag ? res('Hogya'): rej('phat gya')
        },2000)
    })
}

// console.log(MyPromise())

;( async()=>{
    console.log("1st line async fnc")

    // MyPromise(true)
    // .then(res=>console.log(res))
    // .catch(rej=> console.log(rej))

    try{
        let result=await MyPromise(false)
        console.log(result)
    }catch(err){
        console.error(err)

    }
    

})()