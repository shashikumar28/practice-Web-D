let person = {
    // property 
    naam : "shashi kumar",
    city : "new delhi" ,

    //methods -> functions
    describe : function describe(){
        console.log("hi my name is shashi")
    }
}

console.log(person);

console.log(person.naam);
console.log(person.city);
console.log(person.describe); //wrong
console.log(person.describe()); //right