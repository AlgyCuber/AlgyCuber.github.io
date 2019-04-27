let alg = 0; //0 = bubble
let sel;
let sorting = false;
let g = [];
let numinp;
let numval = '';
let numwarn = false;
let numwarncnt = false;
function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  defaultCanvas0.style.position = 'absolute';
  defaultCanvas0.style.top = '0px';
  defaultCanvas0.style.left = '0px';
  sel = createSelect();
  sel.position(32,24);
  sel.option('Bubble Sort');
  numinp = createInput();
  numinp.position(150,24);
  numinp.value(400);
  textAlign(CENTER,CENTER);
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
    rect(width/2+21,20,8,24);
    rect(width/2+35,20,8,24);
  }
  else{
     fill(140,214,51);
     triangle(width/2+46,32,width/2+22,32-sqrt(3)/2*16,width/2+22,32+sqrt(3)/2*16);
  }
  fill(0);
  if(numinp.value().length==0){numval = '';}
  for(let i=0;i<numinp.value().length;i++){
    if(!'0123456789'.includes(numinp.value()[i]) || Number(numinp.value())>2000){
      numinp.value(numval);
      numwarn = true;
      numwarncnt = true;
    }
    else if(i==numinp.value().length-1){numval = numinp.value();}
  }
  if(numwarn){
    if(numwarncnt){
      numwarncnt = false;
      setTimeout(function(){numwarn = false;},3000)
    }
    fill(255,0,0);
    textSize(11);
    text('Number has to be between 20 and 2000',150+numinp.width/2,54);
  }
  fill(0);
  textSize(16);
  text('Numbers',190+numinp.width,36);
}
function mousePressed(){
  if(inCircle(width/2+32,32,48)){sorting = (sorting)?false:true;}
}
