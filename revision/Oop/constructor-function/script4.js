function CreatePencil(name,price,color,company){
    this.name=name;
    this.price=price;
    this.color=color;
    this.company=company;
}

let pencil1=  new CreatePencil("natraj",20,"Black","natraj")
console.log(pencil1);

let pencil2= new CreatePencil("Apsara",25,"Gray","DummyComp");
console.log(pencil2);


// function CreateBiscuits(){
//     this.name="ParleG";
//     this.price=5;
//     this.qty=8;
//     this.company="Parle"
//     this.category="Regular"

// }

// let biscuit1=new CreateBiscuits()
// console.log(biscuit1);