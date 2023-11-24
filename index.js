const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var click = null
var line_end_y = 150
var line_end_x = 50

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.beginPath(); // Start a new path
ctx.moveTo(50, 0); // Move the pen to (30, 50)
ctx.lineTo(50, 150); // Draw a line to (150, 100)
ctx.stroke(); // Render the path



function move(e){

    if (click == true){
    line_end_y = e.clientY
    line_end_x = e.clientX

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath(); // Start a new path
    ctx.moveTo(50, 0); // Move the pen to (30, 50)
    ctx.lineTo(e.clientX, e.clientY); // Draw a line to (150, 100)
    ctx.stroke(); // Render the path
    //console.log(e.clientX, e.clientY)
    console.log(line_end_y)
    }
}

function touchmove(e){

  if (click == true){
  line_end_y = Math.round(e.touches[0].clientY)
  line_end_x = Math.round(e.touches[0].clientX)

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath(); // Start a new path
  ctx.moveTo(50, 0); // Move the pen to (30, 50)
  ctx.lineTo(e.touches[0].clientX, e.touches[0].clientY); // Draw a line to (150, 100)
  ctx.stroke(); // Render the path
  //console.log(e.clientX, e.clientY)
  console.log(line_end_y, line_end_x)
  }
}

function static() {

    function drawLine() {
        if (line_end_y >150){line_end_y--}
        if (line_end_y <150){line_end_y++}
        if (line_end_x >50){line_end_x--}
        if (line_end_x <50){line_end_x++}
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(50, 0);
      ctx.lineTo(line_end_x, line_end_y);
      ctx.stroke();
      console.log(line_end_y);

      if (line_end_y > 150 || line_end_x > 50 || line_end_y < 150 || line_end_x < 50) {
        setTimeout(drawLine, 1); // timeout
      }
    }

    drawLine();
  }




function mousedown(){
    click = true
    canvas.addEventListener('mousemove', move);
    console.log(click)
}

function touchdown(){
  click = true
  canvas.addEventListener('touchmove', touchmove);
  console.log(click)
}

function mouseup(){
    click = false
    static()
    console.log("mouseup done")
    console.log(click)
   // canvas.removeEventListener('mousemove', static)
}

function touchup(){
  click = false
  static()
  console.log("mouseup done")
  console.log(click)
 // canvas.removeEventListener('mousemove', static)
}

function mouseout(){

    click = false
    static()
    console.log(click)
}
