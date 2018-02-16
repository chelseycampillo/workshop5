var freqC = 261;
var freqG = 392;
var freqA = 440;
var freqF = 349;
var freqE = 329;
var freqD = 294;

var playingC, playingG, playingA, playingF, playingE, playingD;
var oscC, oscG, oscA, oscF, oscE, oscD;

var playing = false;

var xspacing = 16;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 75.0; // Height of wave
var period = 500.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave

function setup() {
  createCanvas (400,400);
  background(19,30,85);
	
	w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
  
  oscC = new p5.Oscillator();
  oscC.setType('triangle');
  oscC.freq(freqC);
  oscC.amp(0);
  oscC.start();
  
  oscG = new p5.Oscillator();
  oscG.setType('triangle');
  oscG.freq(freqG);
  oscG.amp(0);
  oscG.start();
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
  
  oscE = new p5.Oscillator();
  oscE.setType('triangle');
  oscE.freq(freqE);
  oscE.amp(0);
  oscE.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
}

function draw() {
  background(19,30,85);
	fill('pink');
  rect(320,0,80,80);
  fill('white');
  text('CLICK', 340,30);
  text('TO', 340, 45);
  text('START',340,60);
	calcWave();
  renderWave();
  if (playing) {
		if (playingC) {
    	fill(82, 72, 156);
    	ellipse(350, 350, 80, 80);
    	fill('white');
    	text('C',345, 355);
  } else if (playingG) {
    	fill(12, 124, 89);
    	ellipse(250, 150, 80, 80);
    	fill('white');
    	text('G', 245, 155);
  } else if (playingA) {
    	fill(239, 202, 8);
  		ellipse(50,50, 25,25); 
    	fill('white');
    	text('A',47,53);
  } else if (playingF) {
    fill(86, 136, 199);
    ellipse(200, 250, 80, 80);
    fill('white');
    text('F', 195, 255);
  } else if (playingE) {
    fill(33, 118, 174);
    ellipse(220, 270, 80, 80);
    fill('white');
    text('E', 215, 275);
  } else if (playingD) {
    fill(116, 79, 198);
    ellipse(250, 300, 80, 80);
    fill('white');
    text('D', 245, 305);
  }
  }
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'C') {
    osc = oscC;
    playingC = true;
  } else if (key == 'G') {
    osc = oscG;
    playingG = true;
  } else if (key == 'A') {
    osc = oscA;
    playingA = true;
  } else if (key == 'F') {
    osc = oscF;
    playingF = true;
  } else if (key == 'E') {
    osc = oscE;
    playingE = true;
  } else if (key == 'D') {
    osc = oscD;
    playingD = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'C') {
    osc = oscC;
    playingC = false;
  } else if (key == 'G') {
    osc = oscG;
    playingG = false;
  } else if (key == 'A') {
    osc = oscA;
    playingA = false;
  } else if (key == 'F') {
    osc = oscF;
    playingF = false;
  } else if (key == 'E') {
    osc = oscE;
    playingE = false;
  } else if (key == 'D') {
    osc = oscD;
    playingD = false;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}

function mouseClicked() {
	fill('white');
  text('ccggaag ffeeddc ggffeed ggffeed ccggaag ffeeddc', 10,20);
}

function calcWave() {
  // Increment theta (try different values for 
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {
  noStroke();
  fill(255);
  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, height/2+yvalues[x], 16, 16);
  }
}
