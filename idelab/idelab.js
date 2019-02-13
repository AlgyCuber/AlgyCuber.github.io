console.log(8);
let dark = false;
let w = window.innerWidth;
let h = window.innerHeight;
function setup(){
  createCanvas(w,h);
  defaultCanvas0.style.position = 'absolute';
  defaultCanvas0.style.left = '0px';
  defaultCanvas0.style.top = '0px';
}
function draw(){
  //background
  background((dark)?40:250);
  //top bar
  noStroke();
  fill(255,245,114);
  rect(0,0,w,64);
  //menu btn
  fill(128,128,128);
  rect(w-48,22.4,32,6.4);
  rect(w-48,28.8,32,6.4);
  rect(w-48,35.2,32,6.4);
}
