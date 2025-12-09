let getUser=(username,cb)=>{
    console.log("Fetching user details...")
        setTimeout(()=>{
            cb({id:12,username:"huihui"})
        }
            ,2000)
    
}

function getUserPosts(id,cb2){
    console.log("Fetching Users All Post....")    
    setTimeout(()=>{
            cb2({p1:"hiuhiu",p2:"huihui"})
        }, 2000)
    }

getUser({username:"xyz",userId:123},function(data){
    console.log(`username : ${data.username}`)
        getUserPosts(data, function(allPosts){
            console.log(`allposts:`, allPosts)
        })
})