// constructor function

// function Person (naam, umar){
//     this.username = naam;
//     this.age = umar;
// }
// Person.prototype.getFullName = function (){
//     return (`my name is ${this.username}`)
// }

// Person.prototype.printName = function (){
//     return (`my name is ${this.username}`)
// }

// let Person1 = new Person ("sam" , 124);
// console.log(Person1)






// class syntex

class Person{
    constructor(naam ,umar){
        this.username = naam;
        this.age = umar;
    }
    printName(){
        console.log(`my name is ${this.username}`)
    }
    getFullName(){
                 return(`name is ${this.username}`)
    }
}

let Person2 = new Person ("jatin" , 22);
console.log(Person2)