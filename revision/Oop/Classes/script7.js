class Users{
    constructor(name,address,username,email,color){
        this.name=name;
        this.address=address;
        this.username=username;
        this.email=email;
        this.color=color;
        this.role;
    }

    write(txt){
        let h1=document.createElement("h1");
        h1.textContent=`${this.username} : ${txt}`;
        h1.style.color=this.color;
        document.body.append(h1);
    }

    checkRole(){
        return `Your are a ${this.role}`;
    }
}

class Admin extends Users{
    constructor(name,address,username,email,color){
        super(name,address,username,email,color);
        this.role="admin";
    }

    remove(){
        document.querySelectorAll("h1").forEach(function (elem){
            elem.remove();
        });
    }
}

let u1= new Users("shaikh","pune","ss7","lol@gmail.com","cyan");
let u2= new Users("Alex","Mumbai","ax7","zol@gmail.com","purple");
let u3= new Users("sam","delhi","sm25","kol@gmail.com","green");

let a1= new Admin("adminwa","pune","AdminHaiHUM","admin.admin@admin","red");

