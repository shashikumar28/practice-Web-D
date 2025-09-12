//3rd part library -> saare data -> promise return 
//axios - return a promise and waits for the entire data at once

axios.get('https://api.tvmaze.com/search/shows?q=girls')
.then(function(respones){
    console.log(respones)
})
.catch(function(error){
    console.log(error)
})