console.log(1);
let mT = (window.innerHeight-600)/2; //margin top
let mL = (window.innerWidth-600)/2; //margin left
function inCircle(mx,my,x,y,r){
  if(sqrt(pow(mx-x,2)+pow(my-y,2))<r){return true;}
  else{return false;}
}
function setup(){
  createCanvas(600,600);
  defaultCanvas0.style.position = 'absolute';
  defaultCanvas0.style.top = mT+'px';
  defaultCanvas0.style.left = mL+'px';
}
function draw(){
  background(250);
  fill();
  ellipse
}
