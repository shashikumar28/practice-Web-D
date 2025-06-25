// var b = 10;

// function sam (){
//     console.log(b)
// }
// sam();


// function bahar (){
//     var b = 10

//     andar();

//     function andar (){
//         console.log(b)
//     }
// }
// bahar();// answer 10 kyuki var ka global access hota ha 



// function bahar (){
    

//     andar();

//     function andar (){
//         console.log(b)
//     }
//     var b = 10
// }
// bahar();//undefined kuki pehle console ho gya bad me defind kiya gya and uske bad console ni tha isliye undefind

// function outer (){
//     var a = 10;

//     inner();

//     function inner(){
//         console.log(a);
//         var a = 30;
//         console.log(a)

//     }
//     var a = 1000;
// }
// // console.log(a);
// outer();


// function outer (){
//     var a = 10;

//     inner();

//     function inner(){
//         // console.log(a);
//         var a = 30;
//         console.log(a)

//     }
//     var a = 1000;
//     console.log(a)
// }
// // console.log(a);
// outer();


// function outer (){
   

//     inner();
//      var a = 10;
//      console.log(a)

//     function inner(){
//         // console.log(a);
//         var a = 30;
//         console.log(a)

//     }

//     console.log(a)
// }
// // console.log(a);
// outer();

// function outer (){
//     var a = 10;
//     console.log(a)

//     if (true){
//         console.log(a)
//         var a = 200;
//         console.log(a)
//     }
//     console.log(a)
// }
// outer();



// function outer (){
//     var a = 10;
//     console.log(a)

//     if (true){
//         console.log(a)
//          a = 200;
//         console.log(a)
//     }
//     console.log(a)
// }
// outer();


// function outer (){
//     let a = 10;
//     console.log(a)// output 10

//     // {
//     //     var a = 200;
//     //     console.log(a)
//     // }
//     // console.log(a)

//     {
//         let a = 200
//         console.log(a)//output 200 kuki let ka scope block hota ha or ya ek naye block me ha isse outer touch nai krega outer let a = 10 hi abhi bhi 
//     }
    
// }
// outer();



function outer (){
    let a = 10;
    console.log(a)//output 10

    // {
    //     var a = 200;
    //     console.log(a)
    // }
    // console.log(a)

    {
        let a = 200
        console.log(a)//output 200
    }
    console.log(a)//output 10
}
outer();
