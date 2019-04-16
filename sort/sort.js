let alg = 0; //0 = bubble
let sel;
function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  defaultCanvas0.style.position = 'absolute';
  defaultCanvas0.style.top = '0px';
  defaultCanvas0.style.left = '0px';
  sel = createSelect();
  sel.position(32,24);
  sel.option('Bubble Sort');
}
function inRect(x,y,w,h){
  return (mouseX>x && mouseX<x+w && mouseY>y && mouseY<y+h);
}
function inCircle(x,y,d){
  return (sqrt(pow(mouseX-x,2)+pow(mouseY-y,2))<d/2);
}
function draw(){
  background(255);
  fill(220);
  rect(0,0,width,64);
  noStroke();
  fill((inCircle(width-2,32,48))?220:255);
  ellipse(width/2-48,32,48,48);
  fill((inCircle(width+2,32,48))?220:255);
  ellipse(width/2+48,32,48,48);
}
