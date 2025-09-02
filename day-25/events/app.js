// function something (){
//     console.log("ma to dab gya ji")
// }

// let btn = document.querySelector('button')
// btn.onclick = function(){
//     console.log('bajrang bali ki jai ')
// }

// let btn = document.querySelector('button');
// let samarth = function(){
//     console.log('bajrang bali ki jai')
// }
// btn.onclick = samarth;//

// interview question 

 let btn = document.querySelector('button')
//  function naccho(){
//  console.log('natu natu natuu ...')
//  }

// function gaayo (){
//    console.log('sa re ga ma pa dha ni sa')
//  }//
// // ek event par ek kaam
// btn.onclick = naccho;
//  btn.onclick = gaayo;

// multiple kaam/function

// btn.addEventListener('click' , function(){
//     console.log('event chal gya')
// })

// btn.addEventListener('click' , naccho)
// btn.addEventListener('click' , gaayo)


let body = document.querySelector('body')
btn.addEventListener('click' , function(){
    body.style.backgroundColor = 'red'
})

