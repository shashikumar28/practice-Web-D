//most widely used technique for api calling

//web api -> which return a promise

fetch('https://api.tvmaze.com/search/shows?q=girls')
.then(function(response){
    //respones //meta data
    return response.json()//parses the data and promise. -> saare packets ka wait krta ha 

})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})

//fetch(). -> by default. -> get -> promise return karta ha
// json() -> prmise return krta ha (wait krta ha) + pareses the data