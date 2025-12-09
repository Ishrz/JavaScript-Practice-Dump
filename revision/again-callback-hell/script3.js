function loginUser(cb){
    console.log("fetching User...")
    setTimeout(()=>{
        cb({user:"poka",id:255})
    },2000)
}

function fetchPermission(userId,cb2){
    console.log("giving permission...")
    setTimeout(()=>{
        cb2(["permisssion approved"])
    },1000)
}

function loadDashboard(per,cb3){
    console.log("Loading Dashboard...")
    setTimeout(()=>{
        cb3("Dashboard Loaded")
    },2000)
}

loginUser(function(user){
    console.log(user)
        fetchPermission(user.id,function(permission){
            console.log(permission);
            loadDashboard(permission,function (loaded) {
            console.log(loaded);
            });
        })


})