// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(res => console.log(res))



// let getUsers=async()=>{
//     try{

//         console.log("fetching users details...")
//         //  let users=await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
        
//         let raWuser= await fetch('https://jsonplaceholder.typicode.com/users')
//         let users= await raWuser.json()
        
//         console.log(users)
//     }catch(err){
//         console.error("Error", err)
//     }
// }

// getUsers()

// let fetchData=(url,callback)=>{
//      fetch(url)
//     .then( res => res.json())
//     .then( res => callback(null,res))
//     .catch(err => callback(err,null))
// }

let fetchData=async (url,callback)=>{
    try{
        let rawUsers=await fetch(url)
        let users= await rawUsers.json()
        console.log(users)
        callback(null,users)
    }
    catch(err){
        callback(err,null)
    }
}




fetchData('https://jsonplaceholder.typicode.com/users',(err,data)=>{
    if(err){
        console.error("Error aaya hai",err)
        return;
    }
    console.log(data[0].name)
    
    console.log("Hellooo")
})

