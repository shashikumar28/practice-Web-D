let can = document.querySelector('canvas')
//brush
let ctx = can.getContext('2d')


// draw rectangle. 
// ctx.fillRect(120,120,50,50);  // x. ,y. ,w , h


//--------------------------------

// paint me dip karo brush ko
//ctx.fillStyle = 'green'
// draw rectangle
//ctx.fillRect(120,120,50,100);  //x. ,y. w ,,h

//-----------------------
//outline dena
// ctx.strokeRect(150,150,70,70)

//-------------
//  brush ko dubao and color do
//tx.strokeStyle = 'purple'
// outline dena
//ctx.strokeRect(150,150,70,70)

//-------------------
// ctx.beginPath();
// ctx.moveTo(40,30);
// ctx.lineTo(160,170);
// ctx.lineTo(30,50)
// ctx.lineTo(150,40)
// ctx.lineTo(150,130)
// ctx.strokeStyle = 'red'
// ctx.stroke();
// ctx.fillStyle = 'green'
// ctx.fill()
// ctx.closePath();

//-------------------
ctx.font = "30px sans-serif"
ctx.fillStyle = 'red'
ctx.fillText('sam' , 90 , 100)