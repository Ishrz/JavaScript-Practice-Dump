
// function users(userName,userEmail='Not Provided'){
    
//     let user={
//     name:`${userName}`,
//     email:`${userEmail}`,
//     abc:function(){
//         return console.log(`${userName} logged in with ${userEmail}`)
//     }
//     }
//     return user;
    
// }

// console.log(users('user1','abc@gmail.com'))
// console.log(users('user2'))

// console.log(users('zoka','zoka@gmail.com').abc())


// class Users{
//     constructor(name,email){
//         this.name=name
//         this.email=email
//     }
    
//     loggedIn(){
//        return console.log(`${this.name} is logged in with ${this.email}`)
//     }
// }

// let user1=new Users('test','abc@gmail.com')
// console.log(user1.loggedIn())

// let user2=new Users('test2','axyz@gmail.com')
// console.log(user2.loggedIn())

// class Products{
//     constructor(product,age){
//         this.product=product,
//         this.age=age

//     }

//     fnc=(
//         console.log(`${product}`)
//     )

// }

// let pro1=new Products('godrej',20)

// console.log(pro1.fnc())


// class Animal{
//     constructor( ){
//         this.leg=2
//         this.breath='yes'
//         this.alive='yes'
// 
//     }
// 
//     walk(count=0){
//         console.log(`${this.name} is walking`)
//         let c=1;
//         // console.log(c+count)
//     }
// }

// let a1=new Animal()
// console.log(a1.walk())

// class Human extends Animal{
//     constructor(name){
//          super()
//         this._name=name;
//     }
//     set naam(n){
//         this._name=n

//     }

//     get naam(){
//         console.log(`chnage name inside SET ${this._name}`)
//     }
// }

// let h1=new Human('human1')
// console.log(h1._name)
// // h1._name='humanChnage'
// h1.naam='poka'
// console.log(h1.naam)



// let user={
//     name:'user1',
//     email:"x@gmail.com",
//     login:function(){
//         console.log('Logged in')
//     }
// }

// user.login()

// class User{
//     constructor(name,email){
//         this.name=name,
//         this.email=email
//     }

//     loggedin(){
//         console.log(`${this.name} is logged in`)
//     }
// }

// let u1=new User('user1',"u@xmail.com")
// let u2=new User('user2',"q@xmail.com")
// let u3=new User('user3',"z@xmail.com")

// console.log(u1);


// let product={
//     name:'cap',
//     price:3300,
//     discounted:function(){
//         return this.price - 200;

//     }
// }

// console.log(product.discounted())

// class Prooducts{
//     constructor(name,price){
//         this.name=name,
//         this.price=price
//     }

//     discounted(){
//         console.log(` discounted price = ${this.price - 200}`)
//     }
// }

// let p=new Prooducts('topi',3300)
// p.discounted()


// class Car{
//     constructor(brand,speed){
//         this.brand=brand,
//         this.speed=speed
//     }
//     drive(){
//         console.log(`${this.brand} and its speed is - ${this.speed}`)
//     }
// }

// let car1=new Car('Honda',180)
// let car2=new Car('Tata',180)
// let car3=new Car('Maruti',170)

// car1.drive()
// car2.drive()
// car3.drive()


// class Student{
//     constructor(name,rollNumber){
//         this.name=name,
//         this.rollNumber=rollNumber
//     }

//     introduce(){
//         console.log(`${this.name} ${this.rollNumber} hello`)
//     }

// }

// let student1=new Student('poka',69)
// let student2=new Student('poki',96)

// student1.introduce()
// student2.introduce()


// let obj={
//     name:'xyz',

//     method1:function(){
//        console.log( `method1 using normal function ${this.name}`)
//     },

//     method2:()=>{
//         console.log( `method2 using arrow function ${this.name}`)
//     }
// }

// obj.method1()
// obj.method2()


// function User(naam){
    
//         this.naam=naam;
    
//     this.userOwnfnc=function(){
//         console.log('private fnc')
//     }
    
// }

// User.prototype.sayName=function(){
//     console.log(`${this.naam}`)
// }

// let u1= new User('user1')
// console.log(u1.sayName())

// let u2=new User('user2')
// console.log(u2)


// class User{
//     constructor(name,flag){
//         this.name=name,
//         this.flag=flag
        
//     }

//     isLoggedIn(){
//         if(this.flag){
//             this.data='huihui'
//             console.log(`welcome ${this.name} yor are logged in here is your data ${this.data} `)
//         }
//         else{
//             console.log(`Oops ${this.name} yor are not logged in cant show you data `)
//         }
//     } 
// }

// let u1=new User('user1',true)
// let u2=new User('user1',false)
// let u3=new User('user1',true)

// console.log(u1)
// console.log(u2.isLoggedIn())
// console.log(u3.isLoggedIn())


// let obj={
//     name:"shaikh"
// }

// function abcd(p1,p2,p3){
//     console.dir(this.name)
//     console.log(`1sp para: ${p1} , 2nd para ${p2} , name : ${this.name}`)
// }

// abcd.call(obj,[2,3],[9,5,9,7],[555])
// abcd.apply(obj,[2,3],[9])
// let rtrnFnc=abcd.bind(obj,[99,88],55,333)
// rtrnFnc()


// SECTION 1: OOPS Thinking with Objects
// 	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
// 	2.	Add one more method to the same object that increases the price by 10 percent.
// 	3.	Now imagine you need 10 laptops with same structure but different data.
// Write down (in words or code) what problems you will face if you keep using plain objects. 


// let laptop={
//     brand: 'lenovo',
//     price:40000,
//     start:function(){
//         console.log(`Laptop started`)
//     },

//     priceIncrease:function(){
//         let tenPercent=40000*(10/100);
//         this.price+=tenPercent;
//         console.log(`price ${this.price}`)
//     }
// }

// laptop.start()
// console.log(laptop.priceIncrease())

// let arr=[
//     {brand:'Apple',price:20000},
//     {brand:'Dell',price:10000},
//     {brand:'Acer',price:30000}
// ]

// arr.map((elem)=>{
//     // let {brand,price}= {...laptop}
//     laptop.brand=elem.brand;
//     laptop.price=elem.price;
//     // console.log(brand)
//     // console.log(price)

//     laptop.priceIncrease()

// })


// SECTION 2: Classes and Objects (Reinforcement)
// 	4.	Create a class named Employee that stores:
// name
// salary

// Add a method showDetails that prints name and salary.
// 	5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.
// 	6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?




// class Employee{
//     constructor(name,salary){
//         this.name=name,
//         this.salary=salary
//     }

//     showDetails(){
//         console.log(`user name is ${this.name} and salary is ${this.salary}`)
//     }
// }

// let employe1=new Employee('Alex',20000)
// let employe2=new Employee('John',30000)
// let employe3=new Employee('Peter',40000)

// employe1.showDetails()
// employe2.showDetails()
// employe3.showDetails()

// // employe2.name='shawn'
// employe2.salary=5

// employe1.showDetails()
// employe2.showDetails()
// employe3.showDetails()

//classes gives us flexibility to modify data of object saperately without affecting other objects or inctance data in less code.




// SECTION 3: Constructor and Initialization
// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.
// Observe and explain why the second account is not affected.

// class BankAccount{
//     constructor(accoountHolderName,balance){
//         this.accoountHolderName=accoountHolderName,
//         this.balance=balance
//     }

//     deposit(amount=0){
//         this.balance+=amount;
//     }
// }

// let account1=new BankAccount('user1',5000)
// let account2=new BankAccount('user2',7000)

// console.log(account1)
// console.log(account2)

// account1.deposit(5)
// account2.deposit(9)
// console.log(account1)
// console.log(account2)

//both account object data are saprete due to this keyword 



// SECTION 4: Understanding this (Very Important)
// 	11.	Create an object named profile with a property username and a method printName that logs this.username.
// 	12.	Call the method normally and observe the output.
// 	13.	Store the method in a separate variable and call it.
// Observe what happens to this and explain why.
// 	14.	Modify the code so that this works correctly again.


// let profile={
//     username:"TestName",
//     printName:function(){
//         console.log(`username : ${this.username}`)
//     }

// }

// let profileMethodeVariable=profile.printName

//first way sol.
// profileMethodeVariable.call(profile)

// second way
// profileMethodeVariable=profile.printName.call(profile)

//third way
// profileMethodeVariable=profile.printName.bind(profile)
// profileMethodeVariable()

// here when we aign the profile.printName to variable so only refrence of printName is assign to new variable not connect of profile thats why this loose its context and we get undefind thats why we 1st try to call that method whit .call method and in context provide our objext which we want to use as this and in second sol we do the same .call method execute imiditlyy and in third one we bind it with our context so anytime when we call that assign method we get context this which is out object profile.



// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.
// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.
// 	18.	Explain why the prototype approach is preferred.

function Vehicle(type,wheels){
    this.type=type;
    this.wheels=wheels;

    // this.describe=function(){
    //     console.log(` the type is ${this.type} and wheels are ${this.wheels}`)
    // }
}

Vehicle.prototype.describe=function(){
    console.log(` the type is ${this.type} and wheels are ${this.wheels}`)
}

let v1=new Vehicle('Car',4)
let v2=new Vehicle('truck',16)
let v3=new Vehicle('tempo',3)

console.log(v1)
console.log(v2)
console.log(v3)

//due to prototype method every object have shared method of constructor function istead of there own copy of method which save memry



