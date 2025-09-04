let inp = document.querySelector('input')
let btns = document.querySelectorAll('button')


for (let button of btns){
    button.addEventListener('click' , function(e){
        let btnText = e.target.innerText;
        if(btnText === 'C'){
        inp.value = "";
        }
        else if(btnText === '='){
            try{
                inp.value = eval(inp.value);
            }
            catch(err){
                inp.value = "invalid"
            }
        }
        else{
            inp.value = inp.value + btnText;
        }
    })
}