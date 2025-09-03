let inp = document.querySelector('input')
let btn = document.querySelector('button')
let list = document.querySelector('#list')

btn.addEventListener('click' , function(e){
    let noteText = inp.value;


let li = document.createElement('li')

li.innerText = noteText;
 list.appendChild(li);

 inp.value = "";

 li.addEventListener('click' , (e) =>{
    e.target.remove();
 })

 })