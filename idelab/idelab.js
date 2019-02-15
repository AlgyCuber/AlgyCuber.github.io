console.log(31);
const w = window.innerWidth;
const h = window.innerHeight;
const TAU = 2*PI;
let dark = false;
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
      fill(255,245,144);
      ellipse(48,32,32,32);
    }
    else{
      fill(128);
      ellipse(32,32,32,32);
      for(let θ=0;θ<TAU;θ+=TAU/8){
        triangle(32+26*cos(θ),32+26*sin(θ),32+22*cos(θ)-4/sqrt(3)*sin(θ),32+22*sin(θ)+4/sqrt(3)*cos(θ),32+22*cos(θ)+4/sqrt(3)*sin(θ),32+22*sin(θ)-4/sqrt(3)*cos(θ));
      }
    }
  }
  else if(t==1){
    background((dark)?40:250);
    noStroke();
    fill(255,245,114);
    rect(0,0,w,64);
  }
}
function mousePressed(){
  ///
}
