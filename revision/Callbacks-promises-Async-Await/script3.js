let pro = new Promise(function (resoldd, rejectt) {
setTimeout( ()=> {
    let ran = Math.floor(Math.random() * 10);
    (ran > 5)? resoldd(`${ran} : random number is grater then 5 condition true msg from resolved promise `) : rejectt(` ${ran} :random number is smaller then 5 condition fail msg from reject promise `)}, 3000);
});

pro
.then((res)=> console.log(` .then function acpt val your code/data : ${res}`))
.catch((rej)=> console.log(`.catch function acpt val code/data : ${rej}`))
// pro
// .then(function (res) {
//   console.log(` .then function acpt val your code/data : ${res}`);
// })
// .catch(function (rej) {
//   console.log(`.catch function acpt val code/data : ${rej}`);
// });
