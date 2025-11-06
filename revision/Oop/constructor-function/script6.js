function CreatePencil(name,price,color,company){
    this.name=name;
    this.price=price;
    this.color=color;
    this.company=company;
}

CreatePencil.prototype.write= function(msg){
        let h1=document.createElement("h1");
        h1.style.color=this.color;
        h1.textContent=msg;
        document.body.append(h1);

    }

let pencil1=new CreatePencil("Natraj",20,"purple","Natraj");
console.log(pencil1);

let pencil2=new CreatePencil("Apsara",25,"red","Natraj");
console.log(pencil2);
console.log(pencil1.write("hello jiii"));
console.log(pencil2.write("hello jiii from pencil 2"));