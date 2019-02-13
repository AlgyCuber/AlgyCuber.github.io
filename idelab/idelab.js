console.log(15);
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
  if(mouseX>w-64 && mouseY<64){
    fill(239,230,107);
    rect(w-64,h,64,64);
    console.log('heyo yeeto');
  }
  fill(128,128,128);
  rect(w-48,19,32,6);
  rect(w-48,29,32,6);
  rect(w-48,39,32,6);
}
