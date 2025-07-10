//  function user (){
   
// }
// let user1 = user()
// console.log(user1)




// //--------------------

// constructor function -> return an object

//  function user (){
   
// }
// let user1 =  new user()
// console.log(user1)


// constructor function
// convention --> first letter capital


//  function User (){
//     this.username = "shashi";
//     this.age = 22;
//     this.color = "blue"
   
// }
// let user1 = new  User();
//  console.log(user1);

//-------------------------

// constructor  -> blueprint  ->  object

// function User (name , umar , rang){
//     // this.username = "name";
//     // agar particular mujhe sirf ek value ko console karna ha to mujhe string me nahi jo peremeter me pass kiya ha waise karna hoha
//     this.username = name;// right way same aise hi umar and rang ko bhi karna hoga
//     this.age = umar;  //console.log age same aise 
//     this.color = rang;
   
// }
// let user1 = new  User("shashi" , 22 , "blue")
//  console.log(user1);
// //  console.log(user1.username); right way
// // console.log(user1.name)
// let user2 = new User("samarth"  , 124 , "laal")
// console.log(user2)


//---------------------------------

function User (name , umar , rang){
    this.username = name;
    this.age = umar;
    this.color = rang
    //  this.disc = function(){
    //    return `my name is ${this.username}`
    // }

    User.prototype.description = function(){
        return `my name is ${this.username}`
    }
}

let user1 = new User ("shashi" , 22 , "blue")
console.log(user1)
console.log(user1.description())

 let user2 = new User ("shashi" , 22 , "blue")
 console.log(user2)
 console.log(user2 .description())


 let user3 = new User ("shashi" , 22 , "blue")
 console.log(user3)
 console.log(user3 .description())