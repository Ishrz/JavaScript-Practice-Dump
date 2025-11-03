// localStorage.setItem("name","shaikh");

// let a=localStorage.getItem("name");
// console.log(a);

// localStorage.setItem("name","ahamad");
// a= localStorage.getItem("name");

// console.log(a);

// localStorage.removeItem("name");

// localStorage.setItem("student", ["alok","plok","slok"]);
localStorage.setItem("student", JSON.stringify(["alok","plok","slok"]))

let a= localStorage.getItem("student");
console.log(a);

let ab= JSON.parse( localStorage.getItem("student"));
console.log(ab);