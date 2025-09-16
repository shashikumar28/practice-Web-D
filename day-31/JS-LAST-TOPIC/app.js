// const person = {
//     first: 'shashi',
//     favcolor: 'blue',
//     last: 'kumar'
// }
// console.log(person.favcolor)
// can you add a property. --> yes
//person.age = 39;
// console.log(person)

// can i change the existing value--> yess
//person.first = "ramesh"
// console.log(person)
// can you delete a property--> yes
//delete person.age;
// console.log(person)

//spread operator

//arr par spread
// let arr = [10, 20, 30, 40, 50];
// let arr2 = [60,70,80]

// concationation (add karna)
// let ans = arr.concat(arr2)
// console.log(ans)
// modern. -> most widely used

// arr2 = [...arr , 60,70,80]
//console.log(arr2)

// let ans = [...arr , ...arr2];
// console.log(ans)

//-----------------

// object. par spread

let obj = {
    l: 'sam',
    m: 'kumar',
    n: 10
}
let obj1 = {
    ...obj,
    age: 34
}

// console.log(onj)
// console.log(obj1)

obj1.l = 200;

// console.log(obj)
// console.log(obj1)


//---------------

// destructuring in Array
// let fruits = ['apple' , 'mango' , 'banana' , 'strawberry'];
//let fruits = ['apple' , 'mango' , 'banana' , 'strawberry' , 'lichi'];

// bekaar
// console.log(fruits[2])
// console.log(fruits[0])

// modern way

// let [a,b,c,d] = fruits;
// let [a,b, ,d] = fruits;
// let [a,b,c,d, e="kiwi"] = fruits;
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// destructuring in objects
const car = {
    name: 'ba balo',
    price: 150
}


// normal way

console.log(car.name)
 console.log(car.price)

// modern

// let {n ,p} = car//wrong
// let {name , price} = car;  //right

let {name:badlahuanam="samkidukan" , price} = car;// default

// console.log(name)//no
console.log(badlahuanam)//yes
console.log(price)
