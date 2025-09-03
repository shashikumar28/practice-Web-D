let h1 = document.querySelector('h1')
let inp = document.querySelector('input')


inp.addEventListener('input' , (event)=>{
    h1.innerText = event.target.value;
})