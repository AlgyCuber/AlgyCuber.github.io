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
  stroke(1);
  fill(180);
  rect(0,0,width,64);
  noStroke();
  if(inCircle(width/2-32,32,48)){fill(220);}
  else{fill(255);}
  ellipse(width/2-32,32,48,48);
  if(inCircle(width/2+32,32,48)){fill(220);}
  else{fill(255);}
  ellipse(width/2+32,32,48,48);
}
