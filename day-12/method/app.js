// let person = {
//     // property 
//     naam : "shashi kumar",
//     city : "new delhi" ,

//     //methods -> functions
//     describe : function describe(){
//         console.log("hi my name is shashi")
//     }
// }

// console.log(person);

// console.log(person.naam);
// console.log(person.city);
// console.log(person.describe); //wrong
// console.log(person.describe()); //right



//------------------


// let person = {
//     name : "shashi kumar",
//     city : "noida",



//     // method -> function 
//     describe : function describe(){
//      describe : function desc(){
//         describe : function(){
//             console.log("hi my name is shashi")
//         }
//         } 
        
//         // describe(); wrong
//         // person.describe(); right
//         // person.desc(); wrong
//         // desc(); wrong
//     }
// }



//------------------

let person = {
    name : "shashi kumar",
    city : "noida",
    describe : function(){
        console.log(`hi my name is shashi kumar`)
        console.log(`hi my name is ${person.name}`)
        console.log(`hi my name is ${this.name}`)
        // return person;
    }
    
}
let ans = person.describe(); // by defualt undefined is returned
// let ans = person.describe(10) // by default undefined is returend
console.log(ans)

