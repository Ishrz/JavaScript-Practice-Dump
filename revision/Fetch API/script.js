fetch("https://randomuser.me/api/?results=5")
.then((rawData)=>{
    return rawData.json();ṇ
})
.then( (Data)=>{
    console.log(Data.results)
})
.catch((err)=>{
    console.log(err);
})