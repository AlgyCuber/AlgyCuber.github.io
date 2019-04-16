let alg = 0; //0 = bubble
let sel;
let sorting = false;
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
  if(inCircle(width/2-32,32,48) || inCircle(width/2+32,32,48)){document.body.style.cursor = 'pointer';}
  else{document.body.style.cursor = 'default';}
  stroke(1);
  fill(220);
  rect(0,0,width,64);
  noStroke();
  if(inCircle(width/2-32,32,48)){fill(240);}
  else{fill(255);}
  ellipse(width/2-32,32,48,48);
  if(inCircle(width/2+32,32,48)){fill(240);}
  else{fill(255);}
  ellipse(width/2+32,32,48,48);
  noStroke();
  if(sorting){
    fill(242,44,26);
    rect(width/2+20,24,8,16);
    rect(width/2+36,24,8,16);
  }
  else{
     fill(153,232,34);
     tri(width/2+50,32,width/2+14,32-sqrt(3)/2,width/2+14,32+sqrt(3)/2);
  }
}
