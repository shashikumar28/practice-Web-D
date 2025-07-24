// let todo = {
//     name: "sahshi kumar",
//     age: 22,
//     city: "Nodia",
//     collage:"Iimt",
//     5: true,
//     s5: 300,
//     e5: 300

// }
// console.log(todo['5'])//true
// console.log(todo.city);
// console.log(todo.age)

// 1️⃣ Numbers ko kabhi keys ke roop me mat use karo
// 2️⃣ Keys ko kabhi number se start mat karo
// 3️⃣ Peeche se sab key string ban jati hai, aur array style se string deke hi access karo
// 4️⃣ Galat tarike se object ko access mat karo
// 5️⃣ Dot ya square bracket notation hi use karo



let todo = {
    title : "buy chocolate" , //comma seperation
    completed : false ,
    ande : "nahi khae" ,
    mickeymouses : 100 
}


// console.log(todo);

// console.log(todo.ande)
// console.log(todo['ande'])
// console.log(todo.title)
// console.log(todo['title'])


// console.log(todo['completed'])
console.log(todo.completed) //getter
todo.completed = true; //setter 
todo['completed'] = 'hello'; //setter 
console.log(todo.completed)


console.log(typeof(todo));


//------wrong ways----------
// console.log(todo['0'])
// console.log(todo['1'])
// console.log(todo.0)