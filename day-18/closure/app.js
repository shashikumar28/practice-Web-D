// function myFunc (){
//     let username = "goli beta"


// function masti (){
//     console.log( 'masti nahi ' + username )
// }
// masti()

// }
// myFunc()



//---------------------------------


// whenever we return a function , that function is never returned alone .
// it always returns with the lexical environment along with it.
// ------ Closure --------


function myFunc (){
    let username = "goli beta"


function masti (){
    console.log( 'masti nahi ' + username )
}
 return masti;

}
 let returnedFunc = myFunc()

 returnedFunc();