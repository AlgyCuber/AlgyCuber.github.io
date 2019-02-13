console.log(7);
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
  //draw screen
    background((dark)?40:250);
    noStroke();
    fill(255,245,114);
    rect(0,0,w,64);
}
