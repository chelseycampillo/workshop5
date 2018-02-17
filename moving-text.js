// Where is the text
var x, y;

function setup() {
  createCanvas(720, 400);
  // Starts in the middle
  x = width
  y = height/2;
}

function draw() {
  background(200);
  
  // Notes to preferred song
  fill(100);
  text('ccaag',x, y);
  
  // Moving left at a constant speed
  x = x - 1;
  
  // Reset to the right side of the canvas
  if (x < 0) {
    x = width;
  }
}
