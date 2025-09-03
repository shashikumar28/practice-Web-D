// let form = document.querySelector('form')

// form.addEventListener('submit' , ()=>{
//     console.log("form submited")
// })




let form = document.querySelector('form')

form.addEventListener('submit' , (event)=>{
 event.preventDefault();
 console.log(form.elements)
 console.log(form.elements)[0]
 console.log(form.elements[1])
 console.log(form.elements[0].value)
 console.log(form.elements[1].value)




})