//WRONG OR RIGHT(YOU DECIDE)
//--> WRONG WAY

// function step1(){
// console.log('selecting the image from photos')
// setTimeout(function(){
//     return 'selected image'
// } , 4000)

// }

// function step2(image){
//     console.log(`apply filter this iamge ${image}` )
//     setTimeout(function(){
//         return ' filtered image'
//     } , 2000)

// }

//  let image = step1();
// console.log(image)
//  let filteredimage = step2(image);
//  console.log(filteredimage)

//----> RIGHT WAY


function step1 (fn){
    console.log('selct to image is being')
    setTimeout(function(){
        console.log('select image successfully')
          fn('image')
    } , 4000)
}

function step2 (image , fn){
    console.log('applying the fiter in process')
    setTimeout(function(){
        console.log('appled filter sucessfully')
        fn('filter')
    } , 2000)
}

 function step3(filter , fn ){
    console.log('write a caption')
    setTimeout(function(){
        console.log('caption done')
        fn('caption')
    } , 3000)
 }
  function step4(caption){
    console.log('upload being processing')
    setTimeout(function(){
        console.log('upload you can check the post')
    } , 5000);
  }


step1(function(image){
 step2(image , function(filter){
    step3(filter , function(caption){
        step4(function(caption){

         });
     });
  });
});
