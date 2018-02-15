var x = 45;
var y = 50;
var xSpeed = 3;
var ySpeed = 1;

function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(0);
  noStroke();

  // draw ellipse
  ellipse(x, y, 10);
  
  // move right 3 pixels
  x = x + xSpeed;
  
  
  // move down 1 pixel
  y = y + ySpeed;
  
  //bounces off "right wall"
  if (x>width) {
    xSpeed = -3;
  }
  
  //bounces off "left wall"
  if (x < 0) {
    xSpeed = 3;
  }
  
  //bounces off "bottom wall"
  if (y > height) {
    ySpeed = -1;
  }
  
  //bounces off "top wall"
  if (y < 0 ) {
    ySpeed = 1;
  }
}
