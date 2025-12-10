let pr=new Promise((res,rej)=>{
    let flag=false
    setTimeout(()=>{
        if(flag)  res(flag)
        else  rej(flag)
    },3000)
})

// console.log(pr.then((res,rej)=>
//     console.log(res)
// )
// )


// let result=async ()=>{
//     // console.log(pr.then(res=>console.log(res)))
//     console.log("first con")
//     // console.log(await pr)
//     // pr.
//     // then(res=>console.log(res))
//     // .catch(rej=> console.log(rej))

//     try{
//         let x=await pr
//         console.log(x)
//     }
//     catch(err){
//         console.error(err)
//     }

//     console.log("hello")
// }

// result()