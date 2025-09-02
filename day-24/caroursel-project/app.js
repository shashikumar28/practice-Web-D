
let pic = document.querySelector('img')


let arr = [
    'https://plus.unsplash.com/premium_photo-1703389454028-f53d91316e58?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1756649627237-d367a3e3a311?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1756474215990-a18a9a0521d5?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8',
]


let num = 0;
let ied = setInterval(function(){
pic.setAttribute('src' , arr[num])
num = (num + 1) % arr.length;
} , 3000)



setTimeout(function(){
    clearInterval(ied)
} , 30000)