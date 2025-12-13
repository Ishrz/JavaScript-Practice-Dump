let emails=["abc@gmail.com","zyx@gmail.com","pqr@gmail.com"];

let sendEmail=()=>{
    return new Promise( (res,rej)=>{

        setTimeout(()=>{
            res("email send");
        },3000 )

    })
}


sendEmail()
.then((res)=> console.log('then ran: ',res)  )
.catch((rej)=> console.log('catch ran : ', rej) )
console.log("heelo")
// console.log(status)

// sendEmail().then().catch()

// console.dir(sendEmail())





















// function step1(value) {
//     return new Promise(resolve => {
//         console.log(`Step 1 done with: ${value}`);
//         resolve(value + 10);
//     });
// }

// function step2(value) {
//     return value * 2;
// }

// // Execution
// step1(5)
//     .then(result => step2(result))
//     .then(finalResult => console.log('Final Result:', finalResult))
//     .catch(err => console.log('Error:', err));



// class MyPromise {
//     constructor(executor) {
//         // 1. Internal State and Value
//         this.state = 'pending'; // Shuruat mein pending
//         this.value = undefined; 
        
//         // 2. Handler Storage
//         this.handlers = []; // Callbacks store karne ke liye

//         // Resolve/Reject Functions ka Definition
//         const resolve = (value) => {
//             // State sirf Pending se Settled ho sakti hai (Fulfilled/Rejected)
//             if (this.state === 'pending') {
//                 this.state = 'fulfilled';
//                 this.value = value;
//                 this.callHandlers(); // Success hone par stored handlers ko call karo
//             }
//         };

//         const reject = (reason) => {
//             if (this.state === 'pending') {
//                 this.state = 'rejected';
//                 this.value = reason; // Error ko value mein store karte hain
//                 this.callHandlers(); // Failure hone par stored handlers ko call karo
//             }
//         };

//         // Executor function ko turant call karte hain
//         // Aur apne internal resolve/reject functions usko pass karte hain
//         try {
//             executor(resolve, reject);
//         } catch (error) {
//             reject(error);
//         }
//     }

//     // --- Prototype Methods (.then() and .catch()) ---

//     then(onFulfilled, onRejected) {
//         // 3. Handlers ko store karte hain, ya agar promise settled hai toh turant chalaate hain
//         // (Bahut simplified logic)
        
//         // Aur yaad rakhiye, .then hamesha NAYA Promise return karta hai for chaining!
//         return new MyPromise((resolveNext, rejectNext) => {
//              // Logic to register and execute the callbacks
//         });
//     }

//     callHandlers() {
//         // Is method mein woh saare callbacks chalaaye jaate hain jo .then() mein store huye the
//         // ... (Logic to execute stored handlers based on this.state and this.value)
//     }
// }