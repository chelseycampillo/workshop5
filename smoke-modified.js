var x = 230;
var y = [];
var ctr = 0;
var ySpeed = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	
	for (var i =0; i < 100; i = i + 1) {
		ySpeed[i] = random(0,height);
	}
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, x, 20);
  
  // droplets
	for (var i = 0; i <= ctr; i = i + 1) {
		ellipse(x, y[i], 10);
	}
  
	
	//randomly decide if new ball should come
	if (random(0, 10) < 2) {
		ctr += 1;
		y[ctr] = 220;
		ySpeed[ctr] = random(1, 10);
	}
  
  // down 3 pixels each frame, but maybe should be accelerating?
  for (var i = 0; i < ctr; i++) {
		y[i] = y[i] + ySpeed[i];
	}
	
}
