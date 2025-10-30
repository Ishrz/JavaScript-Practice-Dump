const user ={
    "first-name": "shaikh",
};

let {"first-name" : firstname }= user;

//or
// let {["first-name"] : firstname } = user;
console.log(firstname);