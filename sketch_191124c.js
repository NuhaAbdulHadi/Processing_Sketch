let img ;
let slider ;
function setup() {
createCanvas(900,643);
let col = color(25, 23, 200, 50);
let button = createButton('reset');
button.mousePressed(setup);
button.style('background-color', col);
button.position(40, 10);
img=loadImage('img.jpg');
slider = createSlider(0, 255, 100);
  slider.position(40, 40);
  slider.style('width', '100px');
 background(0);
// resetButton();

//button.mousePressed(resetButton);
}
//paintaining with pixcels
function draw() {
 // let val = slider.value();
 for(var i=0 ;i<500;i++){
 var x =random(width);
 var y= random(height);
 var c =img.get(int(x),int(y));
 fill(c,12,slider.value());
 noStroke();
 ellipse(x,y,16,16);
 
 }
 
  
 
}
/*function resetButton(){
draw();
}*/
