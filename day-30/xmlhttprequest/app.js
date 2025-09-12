
// constructor function
// 1.  XMLHttpRequest

let req = new XMLHttpRequest();

//request open == connection banana

console.log(req);
req.open("GET" , 'https://api.tvmaze.com/search/shows?q=girls')

//request ko actually mei bhejna
req.send();

req.onerror  = function(response){
    //console.log(response);
    console.log(this.response)
}