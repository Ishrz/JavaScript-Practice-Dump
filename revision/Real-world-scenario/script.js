const apiKey='16366befb5d7c2154d3075e3722eec35'



// console.log(url)

const  getData=async (city)=>{
    try{
        let rawResponse=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

        if(!rawResponse.ok) throw new Error("City not found,try diffrent city or put city name correct")
        let response=await rawResponse.json()
        
        if(response.main.temp > 35){
            console.warn(`too hot out there : ${response.main.temp}`)
        }else if(response.main.temp < 10){
            console.warn(`too cold out there : ${response.main.temp}`)
        }else{
            console.log(response.main.temp)
        }
    }catch(err){
        console.log("alert: " ,err.message )
    }
}

getData('pune')

