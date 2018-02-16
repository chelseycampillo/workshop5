//rainbow of space ships

var x = [];
var y = [];
var colors = [];
var r = 0;

function setup() {
  createCanvas(400, 400);
	for (var i = 0; i<20; i = i + 0.5) {
		x[i] = width / 2;
		y[i] = height / 2;
		colors[i] = color(random(255), random(255), random(255));
	}
}
  
function draw() {
  background(0);
  noStroke();
	
	for (var i = 0; i < 20; i = i + 0.5) {
		fill(colors[i]);
		translate(x,y);
		rotate(r);
		ellipse (x[i], y[i], 60, 60);
		ellipse (x[i], y[i], 40, 80);

		y[i] = y[i] + 2;
  
		// rotate 0.05 radians ~= 2.8 degrees per frame
  	r += 0.3
  
  // if reach past the top a bunch
		if (x[i] > 500) {
			x[i] = 0;
		}
			
  	if (y[i] > 500) {
    	y[i] = 0;
  }
	}
}
