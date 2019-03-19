console.log(4);
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
  defaultCanvas0.style.border = '1px';
}
function draw(){
  background(250);
  fill(185,244,66);
  ellipse(300,300,100,100);
  fill(242);
  triangle(330,300,285,300-15*sqrt(3),285,300+15*sqrt(3));
}
