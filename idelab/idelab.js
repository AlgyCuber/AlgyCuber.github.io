console.log(100);
let w = window.innerWidth;
let h = window.innerHeight;
let TAU;
let dark = false;
let t = 0; //tab : 0 = idle, 1 = lab, 2 = games
let aBucks = 0;
let aps = 0; //aBucks per second
let pups = { //powerups
  cookies:0
};
function setup(){
  createCanvas(w,h);
  defaultCanvas0.style.position = 'absolute';
  defaultCanvas0.style.left = '0px';
  defaultCanvas0.style.top = '0px';
  TAU = 2*PI;
  textAlign(CENTER);
  textFont(loadFont('SourceSansPro-Black.otf'));
}
function draw(){
  if(t==0){
    background((dark)?60:240);
    //pointer
    if((mouseX>0 && mouseX<64 && mouseY>0 && mouseY<64) || (sqrt(pow(mouseX-w/2,2)+pow(mouseY-2*h/3,2))<(w-40)/30)){
      document.body.style.cursor = 'pointer';
    }
    else{document.body.style.cursor = 'default';}
    //drawings
    noStroke();
    fill(255,245,114);
    rect(0,0,w,64);
    if(mouseX>0 && mouseX<64 && mouseY>0 && mouseY<64){
      fill(255,241,92);
      rect(0,0,64,64);
    }
    if(dark){
      fill(128);
      ellipse(32,32,32,32);
      if(mouseX>0 && mouseX<64 && mouseY>0 && mouseY<64){fill(255,241,92);}
      else{fill(255,245,144);}
      ellipse(48,32,32,32);
    }
    else{
      fill(128);
      ellipse(32,32,20,20);
      for(let θ=0;θ<TAU;θ+=TAU/8){
        triangle(32+22*cos(θ),32+22*sin(θ),32+14*cos(θ)-4/sqrt(3)*sin(θ),32+14*sin(θ)+4/sqrt(3)*cos(θ),32+14*cos(θ)+8/sqrt(3)*sin(θ),32+14*sin(θ)-8/sqrt(3)*cos(θ));
      }
    }
    if(dark){fill(14,134,209);}
    else{fill(140,222,255);}
    rect(10,74,(w-40)/3,h-84);
    rect((w-40)/3+20,74,(w-40)/3,h-84);
    rect(2*(w-40)/3+30,74,(w-40)/3,h-84);
    if(dark && sqrt(pow(mouseX-w/2,2)+pow(mouseY-2*h/3,2))<(w-40)/30){fill(201,197,36);}
    else if(sqrt(pow(mouseX-w/2,2)+pow(mouseY-2*h/3,2))<(w-40)/30 || dark){fill(229,225,45);}
    else{fill(255,251,50);}
    stroke(0);
    ellipse(w/2,2*h/3,(w-40)/15,(w-40)/15);
    fill(20);
    noStroke();
    textSize((w-40)/40);
    text('a',w/2,205/300*h);
    fill(54,201,86);
    stroke(0);
    rect(w/2-(w-40)/8,h/5,(w-40)/4,h/23);
    rect(w/2-(w-40)/8,3*h/10,(w-40)/4,h/23);
    noStroke();
    fill(0);
    textSize((w-40)/80)
    text(aBucks+' aBucks',w/2,h/5+h/38);
    text(aps+' aBucks per second',w/2,3*h/10+h/38);
    textSize((w-40)/45);
    text('POWERUPS',w-10-(w-40)/6,h/5-h/30);
  }
  else if(t==1){
    background((dark)?60:240);
    noStroke();
    fill(255,245,114);
    rect(0,0,w,64);
    if(mouseX>0 && mouseX<64 && mouseY>0 && mouseY<64){
      fill(255,241,92);
      rect(0,0,64,64);
      document.body.style.cursor = 'pointer';
    }
    else{document.body.style.cursor = 'default';}
    if(dark){
      fill(128);
      ellipse(32,32,32,32);
      if(mouseX>0 && mouseX<64 && mouseY>0 && mouseY<64){fill(255,241,92);}
      else{fill(255,245,144);}
      ellipse(48,32,32,32);
    }
    else{
      fill(128);
      ellipse(32,32,20,20);
      for(let θ=0;θ<TAU;θ+=TAU/8){
        triangle(32+22*cos(θ),32+22*sin(θ),32+14*cos(θ)-4/sqrt(3)*sin(θ),32+14*sin(θ)+4/sqrt(3)*cos(θ),32+14*cos(θ)+8/sqrt(3)*sin(θ),32+14*sin(θ)-8/sqrt(3)*cos(θ));
      }
    }
  }
}
function mousePressed(){
  if(mouseX>0 && mouseX<64 && mouseY>0 && mouseY<64){
    dark = (dark)?false:true;
  }
  else if(sqrt(pow(mouseX-w/2,2)+pow(mouseY-2*h/3,2))<(w-40)/30){
    aBucks[0]++;
  }
}
