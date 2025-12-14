let emails=["abc@gmail.com","xyz@gmail.com","pqr@gmail.com","poka@gmail.com"]

const sendEmail=(email)=>{
    return new Promise((res,rej)=>{
        let timer=Math.floor(Math.random()*5)
        setTimeout(()=> {
            let probability= Math.floor(Math.random() * 10)
            // console.log(probability)
            if(probability >5) res(`maill sent to : ${email}`)
            rej(`mail not sent to : ${email}`)
        },3000)
        
    })
}


// sendEmail("xyz@gmail.com")
// .then( res => console.log(res))
// .catch( (rej) => console.error(rej))



const emailSender= async(emails)=>{
    let responses=emails.map( (singleEmail)=>{
        // console.log(singleEmail)

        return sendEmail(singleEmail)
        .then( response => response)
        .catch(err => err)
    })

    let resultArray=await Promise.all(responses)
    console.log(resultArray)
    console.log("___________________________")
    console.log("___________________________")
    console.log("___________________________")
    console.log("___________________________")
    resultArray.forEach( elem => console.log(elem))
    
}

emailSender(emails)