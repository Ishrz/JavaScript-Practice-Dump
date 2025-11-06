let coffee={
    name: "latte",
    drink : function(){
        console.log("gut gut gut");
    },
};

console.log(coffee)

let mocha= Object.create(coffee);

mocha={
    state:hot
}

console.log(mocha.drink());