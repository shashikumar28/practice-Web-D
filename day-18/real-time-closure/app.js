function counter (){
    let count = 0;

    return{
        getCount: function(){
            return count;
        },
        increament: function(){
            count ++
        },
        decreament: function(){
          count --
        },
        reset: function(){
            count = 0

        },
    }
}
let counter1 = counter();
console.log(counter1)// isme sare function aa gye
// let counter1 = {
//     getCount: function(){
//         return count;
//     }
// }

//console.log(count)//error acces ni ha iska

console.log(counter1.getCount())//right way to print


counter1.increament();//--> 1
counter1.increament()// --> 2
console.log(counter1.getCount())// -->> 2

counter1.increament() //--> 3
counter1.decreament() // -> 2
counter1.increament() //--> 3


console.log(counter1.getCount())  //3

counter1.reset()

console.log(counter1.getCount()) // 0


//----------------

counter1.increament();
counter1.increament();
let nas = counter1.getCount()  - 1;
console.log(nas)
