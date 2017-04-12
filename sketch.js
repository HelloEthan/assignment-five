// P5 STUFF ONLY
var xspacing = 16;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 75.0; // Height of wave
var period = 500.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  		    // Using an array to store height values for the wave
var rawData;



function setup() {
	createCanvas(windowWidth, windowHeight);
  	w = width+16;
  	dx = (TWO_PI / period) * xspacing;
  	yvalues = new Array(floor(w/xspacing));
    // var rawData = data;
}

function draw() {
	background('lightblue');
  	calcWave();
  	renderWave();
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

   var amplitude = map(rawData, 0, 1023, 0, 75.0); 
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

////////////////////////////////////////////////

// all non-p5 javascript needs to go inside init() 
// so that this code executes only AFTER the page has loaded

function init(){

}

window.addEventListener('load', init);


