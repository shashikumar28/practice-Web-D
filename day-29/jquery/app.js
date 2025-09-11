//let h1 = $('h1'); //document.querySelectorAll('h1) ka kam $ kr rha ha 
 
//id
//let idd  = $('#sam');

//class
//let kilas = $('.sammy')

//let para = $('p')

//manipulation ----------

// para.css('color' , 'red')
// para.css('border' , '2px solid black');
// para.css('background-color' , 'yellow')

// // better approch

// para.css({
//     color: 'blue',
//     border: '5px solid green',
//     fontSize: '40px',
//     backgroundColor: 'pink'

// })

//---------------------------
// getter
//console.log(para.text()) brainless. -> TEXTCONTENT


// setter
//para.text('mere naam shashi ha ')

///console.log(para.html())//innerhtml

//------------------------

// let inp = $('input');
// //getAttributes //getter
// console.log*(inp.attr('type'))
// console.log*(inp.attr('id'))


//setattributes. //setter. -> (jis ,jisse)

// inp.attr('type' , 'color')
// inp.attr('type' , 'date')
// inp.attr('type' , 'checkbox')



//----------------------

// let lis = $('ul li').first();
// lis.css('color' , 'red')


// let liss = $('ul li').last();
// lis.css('color' , 'green')


//----------------

// getter + setter

//.val()

//let inp = $('input');

// console.log(inp.val())//getter
// inp.val('me ni batung')

// class attributes
// CLASSLIST.ADD , CLASSLIST.REMOVE

let para = $('p')

//add
// para.addClass('a')
//para.addClass('a b c') //yes
//ara.addClass('a','c')

//remove
// para.removeClass('a')
// para.removeClass('a b c')

// toggle
// para.toggleClass('a')
// para.toggleClass('a b ')

// hasclass
console.log(para.hasClass('a'))


