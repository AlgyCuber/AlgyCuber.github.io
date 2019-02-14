console.log(21);
let dark = false;
let w = window.innerWidth;
let h = window.innerHeight;
let t = 0; //tab : 0 = idle, 1 = lab
let onMenu = false;
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
  //mouse events
  if(mouseX>w-64 && mouseY<64){
    fill(239,230,107);
    rect(w-64,0,64,64);
    document.body.style.cursor = 'pointer';
  }
  else{document.body.style.cursor = 'default';}
  //menu btn
  fill(128);
  rect(w-48,19,33,6);
  rect(w-48,29,33,6);
  rect(w-48,39,33,6);
  //menu tab
  if(onMenu){
    fill(160);
    rect(w-200,64,200,800);
  }
}
function mousePressed(){
  if(mouseX>w-64 && mouseY<64){onMenu = (onMenu)?false:true;}
}
