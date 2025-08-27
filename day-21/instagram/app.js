//WRONG OR RIGHT(YOU DECIDE)
//--> WRONG WAY

function step1(){
console.log('selecting the image from photos')
setTimeout(function(){
    return 'selected image'
} , 4000)

}

function step2(image){
    console.log(`apply filter this iamge ${image}` )
    setTimeout(function(){
        return ' filtered image'
    } , 2000)

}

 let image = step1();
console.log(image)
 let filteredimage = step2(image);
 console.log(filteredimage)

