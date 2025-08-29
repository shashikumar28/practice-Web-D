let step1 = function(){
    console.log('selecting image')
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            resolve('image.jpg')
        } , 4000)
    })
}
let step2 = function(image){
    console.log(`applying filter to ${image}`)
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            resolve('appled filtered to image')
        } , 3000)
    })
}
let step3 = function(filter){
    console.log(`applying caption  to ${filter}`)
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            resolve('appled caption to image')
        } , 2000)
    })
}
let step4 = function(ima){
    console.log('image uploading plz wait')
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            resolve('done image uploaded plz like and share')
        } , 5000)
    })
}

step1()
.then(function(image){
console.log('image selected')
return step2(image)
})

.then(function(filter){
    console.log('filter applyed')
    return step3 (filter)
})
.then(function(comment){
    console.log(`${comment} to the image`)
    return step4 (comment)
})
.then(function(final){
    console.log(final)
})
.catch(function(err){
    console.log(err)
})