$('button').click(function(){
console.log('hello')
})

$('ul li').click(function(e){
console.log(e)
console.log(e.target)
e.target.classList('color' , 'red')//wrong

//jquery wale this keyword. --> target bss
$(this).css('color' , 'red')


})

//keyup , keydown

$('input').keyup(function(){
    console.log('hello')
})


addEventListener()
$('button').on('click' , function(){
    console.log('hello')
    let ans = $('input').val()
    console.log(ans)
})


//effects


$('#fadein').on('click' , function(){
    $('#container').fadeIn()

})
$('#fadeout').on('click' , function(){
    $('#container').on('click' , function(){
        $('#container').fadeToggle()
    })
})