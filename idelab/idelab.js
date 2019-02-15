console.log(24);
let dark = false;
let w = window.innerWidth;
let h = window.innerHeight;
let t = 0; //tab : 0 = idle, 1 = lab, 2 = games
let abucks = 0;
function setup(){
  createCanvas(w,h);
  defaultCanvas0.style.position = 'absolute';
  defaultCanvas0.style.left = '0px';
  defaultCanvas0.style.top = '0px';
}
function draw(){
  if(t==0){
    background((dark)?40:250);
    noStroke();
    fill(255,245,114);
    rect(0,0,w,64);
    if(dark){
      fill(128);
      ellipse(32,32,32,32);
    }
    else{
      fill(128);
      ellipse(32,32,32,32);
    }
  }
  else if(t==1)
    background((dark)?40:250);
    noStroke();
    fill(255,245,114);
    rect(0,0,w,64);
}
function mousePressed(){
  ///
}
