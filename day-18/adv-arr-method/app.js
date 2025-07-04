//array


//1.  forEach()

// let arr = ['india' , 'uk', 'new zeeland', 'south africa'];

//  forEach()  -> method which accept a cb function

// arr.forEach();  -> syntex lihkne ka //HOF  -> high order funcion
// arr.forEach(function(item){
//     console.log(item)
// });


// arr.forEach(function(item , index){
//     console.log(item + '-->'  + index )
// });


// 2. map()


//  let arr = ['india' , 'uk', 'new zeeland', 'south africa'];
//  let number = [10,20,30,40,50]


// let newarr = arr.map(function(item){
//     return item.toUpperCase();
// })
// console.log(arr)
// console.log(newarr)


//--------------

// let newsqrArray = number.map(function(item , index){
//     return item*index
// })
// console.log(number)
// console.log(newsqrArray)


//---------------
// 3. filter -> method

//  let number = [10,20,30,40,50]

//  let filterArray = number.filter(function(item){
//     if(item>=20 ){
//         return true
//  } else  {
//     return false
//  }
//  })

//  console.log(number)
//  console.log(filterArray)


let number = [10,20,30,40,50]


let reduceArray = number.reduce(function(accumulator, currentValue){ //accumulator → previous value ya total jo ab tak calculate hua hai.
     return accumulator * currentValue                              //currentValue → abhi ka current element.//
    // console.log(reduceArray)
} , 1)// Multiply → use 1 as initial value ✅ sum  use any any calculation use 
// console.log(number)
console.log(reduceArray)
//reduce kaise kam krta ha 
// Kaise Kaam Karta Hai?
// reduce() left se right chalta hai (pehle element se last tak)

// Har step me accumulator ko update karta hai

// Last me ek single final value return karta hai