let pro = new Promise(function (resoldd, rejectt) {
setTimeout(() => {
    let ran = Math.floor(Math.random() * 10);
    if (ran > 5) {
    resoldd(
        `${ran} : random number is grater then 5 condition true msg from resolved promise `
    );
    } else {
    rejectt(` ${ran} :random number is smaller then 5 condition fail msg from reject promise `);
    }
}, 3000);
});


async function abcd(){
    try{
      let val= await pro;
      console.log("fromTRY", val);
    } catch(err){
      console.log("fromCatch", err);
    }
    
}

abcd();











//////////////////////
// pro.then(function (res) {
//   console.log(` .then function acpt val your code/data : ${res}`);
// }).catch(function (rej) {
//   console.log(`.catch function acpt val code/data : ${rej}`);
// });
