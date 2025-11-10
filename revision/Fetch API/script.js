fetch("https://randomuser.me/api/?results=5")
.then((rawData)=>{
    return rawData.json();
})
.then( (Data)=>{
    console.log(Data.results)
})
.catch((err)=>{
    console.log(err);
})