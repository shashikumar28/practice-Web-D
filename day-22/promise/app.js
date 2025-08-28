let mypromise = new Promise(function(resolve , reject){
    setTimeout(function(){
        let data = 'me server se contect hu'
        let err = 'me server se contect ni hu'
        reject(err)
        resolve(data)
        
    } , 4000)
})

mypromise
.then(function(data){
    console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })
