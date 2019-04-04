let mT = (window.innerHeight-600)/2; //margin top
let mL = (window.innerWidth-600)/2; //margin left
let s = 0; //screen
let inf = {//info
  l1:{light:false,over:false}
};
function inCircle(mx,my,x,y,r){
  return (sqrt(pow(mx-x,2)+pow(my-y,2))<r);
}
function inRect(mx,my,x,y,w,h){
  return (mx>x && mx<x+w && my>y && my<y+h);
}
function setup(){
  createCanvas(600,600);
  defaultCanvas0.style.position = 'absolute';
  defaultCanvas0.style.top = mT+'px';
  defaultCanvas0.style.left = mL+'px';
  defaultCanvas0.style.border = '1px solid';
  textAlign(CENTER);
  textSize(15);
}
function draw(){
  background(250);
  //mouse
  if(s==0 && inCircle(mouseX,mouseY,300,300,50)){document.body.style.cursor = 'pointer';}
  else if(s==1 && inRect(mouseX,mouseY,284,434,32,32)){document.body.style.cursor = 'pointer';}
  else{document.body.style.cursor = 'default';}
  //layout
  if(s==0){
    if(inCircle(mouseX,mouseY,300,300,50)){fill(164,216,58);}
    else{fill(185,244,66);}
    ellipse(300,300,100,100);
    fill(242);
    triangle(326.25,300,281.25,300-15*sqrt(3),281.25,300+15*sqrt(3));
  }
  else if(s==1){
    noStroke();
    fill(220);
    rect(0,0,600,60);
    stroke(0);
    if(inRect(mouseX,mouseY,284,434,32,32)){fill(226,221,70);}
    else{fill(242,236,75);}
    rect(284,434,32,32);
    strokeWeight(3);
    if(inf.l1.light){stroke(255,0,0);}
    else{stroke(0);}
    line(300,166,300,434);
    stroke(0);
    strokeWeight(1);
    if(inf.l1.light){fill(35,222,255);}
    else{fill(21,90,155);}
    ellipse(300,150,32,32);
    text('Level 1',300,25);
    if(inf.l1.over){}
  }
}
function mousePressed(){
  if(s==0 && inCircle(mouseX,mouseY,300,300,50)){s = 1;}
  else if(s==1 && inRect(mouseX,mouseY,284,434,32,32)){
    if(inf.l1.light){inf.l1.light = false;}
    else{
      inf.l1.light = true;
      inf.l1.over = true;
    }
  }
}
