class CreatePencil{
    constructor(name,company,price,color){
        this.name=name;
        this.company=company;
        this.price=price;
        this.color=color;
    }

    write(text){
        let h1=document.createElement("h1");
        h1.textContent=text;
        h1.style.color=this.color;
        document.body.appendChild(h1);
    }

    erase(){
        let h1s=document.querySelectorAll("h1");

        h1s.forEach((elem)=>{
            if(elem.style.color === this.color){
                // document.body.removeChild(elem);
                elem.remove();
            }
        })
        
    }
}

let p1 = new CreatePencil("natraj","natraj",20,"red");
console.log(p1);

let p2 = new CreatePencil("natraj","natraj",20,"purple");

p1.write("hello from pencil 1");
p2.write("hello from pencil 2");
p1.write("hello from pencil 1 text 2");
p2.write("hello from pencil 2 text 2");

p2.erase();