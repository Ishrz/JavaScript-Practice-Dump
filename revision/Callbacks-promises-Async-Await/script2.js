function profile(userName, fnc){
    console.log("fatching profile data...");
    setTimeout( ()=>{
        fnc({userName,_id:42, age:25, city:"pune"});
    }, Math.floor(Math.random()*10)*1000
)}

function sarePostlekoAao(id, cb){
        console.log("fatching profile posts....");

    setTimeout( ()=>{

        cb( {_id:id, posts:["p1","p2","p3","p4"]})

    }, Math.floor(Math.random()*10)*1000)
}

function savePostNikal(id, cb){
    console.log("saving posts in array.....")
    setTimeout( ()=>{
        cb({_id:id, savePost:["saved1","saved2"]})
    },4000)

}

profile("shaikh", function(user){
    console.log(user);
    sarePostlekoAao(user._id, function(posts){
    console.log(posts);
    savePostNikal(user._id, function(saveP){
        console.log(`saved posts : ${saveP.savePost}`)
    })
    });
})