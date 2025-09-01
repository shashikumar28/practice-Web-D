// this is 5 type of 
//   1 regular function invocation
//   2 method invocation
//   3 constructor invocation
//   4 indirect calling. 
//   5 arrow function


// most improtant line in this topic.  --> this always depends on how it(this) is being called

// 1. regular function invocation


// function fn (){
//     console.log(this)
// }

// fn();  //agar aise direct function ko call krte ha to usse regular function invocation bolte ha 
// and ham jo console use krte ha wo pehle server se data leta ha and then fir console ko milta ha 
//  window means global global object broswer. -> like chrome brave -->. window


//. 2  method invocation

// let obj = {
//     a: 20,
//     fn:function(){
//         console.log(this)

//     }
// }

// obj.fn();




// --------------------

// let obj = {
//     a: 20,
//     fn:function(){
//         console.log(this)
//         function sam(){
//             console.log(this)
//     }
//     sam();
// }
// }

// obj.fn();


// let obj = {
//     a: 20,
//     fn:function(){
//         console.log(this)
//         console.log(this === window)

//     }
// }

//  let bahukal = obj.fn;
//  bahukal();

// -------------

// 3.   constructor invocation This" always points to the newly created object. 


// function Create(){
//     this.x = 200;
// }
// let obj = new Create();
// console.log(obj.x)



// ---------------------


// indirect calling

// let obj = {
//     sam : 20,
//     fn:function( a,b,c){
//         console.log(this,a,b,c)
//     }
// }

//  let obj1 ={
//         sam: 50
//  }



 //apply
// obj.fn(1,3,4) ---> method invocation
//obj.fn.call(obj1)
//  obj.fn.call(obj1, 1,2,3);





 //apply


//  let obj = {
//     sam : 20,
//     fn:function( a,b,c){
//         console.log(this,a,b,c)
//     }
// }

//  let obj1 ={
//         sam: 50
//  }


//   obj.fn.apply(obj1, [1,2,3]);


// let obj = {
//      sam : 20,
//      fn:function(){
//         console.log(this)
//     }
// }
// let myfun = obj.fn.bind(obj);
//console.log(myfun)
//myfun()



let obj = {
     sam : 20,
     fn: ()=>{
        console.log(this)
        let = sam =  () => {
            console.log(this)
         }
         sam();
    }
}
obj.fn();
 

