// function movie (){



// function makkhi (){
//     console.log("makkhi")
//     return  makkhi;
// }

// }
// let fevmovie = movie ();
//     console.log(makkhi );


 //function are the heart of js

//  function sum (num1 , num2){
//     console.log(num1+num2)
//  }

//  sum(4,5)
//  sum("shahi" , "kumar")
//  sum(true , false)



//  function a (d){ //hof---> high order function
//     console.log("ma a hu")
//     d();//yaha par call kiya gaya ha function ko  yaha par calling important ha callback function ha ya 
//  }
//  function b (){
//     console.log("ma b hu")
//  }
//  a(b);

// function a (fn){ //hof---> high order function
//     console.log("ma a hu")
//     fn()
// }
// a(function b (){
//     console.log("ma b hu")

// });

// function a (){
//     console.log("inside a")

//     function b (){
//         console.log("inside b")
//     }
//     return b;
// }
// let temp = a();
// temp();




// Hgher order functions -> 'a'
// 1. when you pass the entire function as an argument in some other function then it is called HOF.
                    // or
// 2. when you return an entire function from some other funtion then the other function is your hof. 

// callback function -> 'b'
// the function which is being sent as an argument to some other function and therein called as well then it is a CALLBACK function.

// -----------USE CASE------------

// function getString(arr){
//     let res = [];
//     for(let item of arr){
//         if(typeof(item) === 'string'){
//             res.push(item)
//         }
//     }
//     return res;
// }

// function getNumber(arr){
//     let res = [];
//     for(let item of arr){
//         if(typeof(item) === 'number'){
//             res.push(item)
//         }
//     }
//     return res;
// }

// function getBoolean(arr){
//     let res = [];
//     for(let item of arr){
//         if(typeof(item) === 'boolean'){
//             res.push(item)
//         }
//     }
//     return res;
// }


// let arr = ['sam' , 100 , 'bhaukaal', true , 400 , false ]
// console.log(getString(arr))
// console.log(getNumber(arr))
// console.log(getBoolean(arr))

// ----------------- use hof----------------

function getString (item){
    return typeof(item) === 'string'
}
function getNumber (item){
    return typeof(item) === 'number'
}
function getBoolean (item){
    return typeof(item) === 'boolean'
}

function get (arr ,fn){//hof
    let res = [];
    for (let item of arr){
        if(fn(item)){
            res.push(item);
        }
    }
    return res;
    
}

let arr = ['sam' , 100 , 'bhaukaal', true , 400 , false ]
 console.log(get( arr , getString))
 console.log(get( arr , getNumber))
 console.log(get( arr , getBoolean))