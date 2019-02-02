console.log(43);
let sc = [255,0,0];
let pc = [255,255,255];
let input, button;
let fc = [255,255,255];
let cmd = '';
let x = 300, y = 300, dir = 0;
//let inp = createInput();
function greet(){
  const name = input.value();
  console.log(name);
  input.value('');
  switch(name.split(" ")[0]) {
  case "rt":
    dir += name.split(" ")[1]
      console.log(dir);
    break;
  case "lt":
    dir += -name.split(" ")[1]
    break;
  default:
    // code block
}
}
function dtb(){
  stroke(0);
  strokeWeight(1);
  fill(sc[0],sc[1],sc[2]);
  rect(-10,-10,20,20);
  fill(0);
  rect(-10,-10,20,10);
} //draw turtle
function setup(){
  createCanvas(601,601);
  input = createInput();
  input.position(700, 65);
  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);
  greet();
}
function draw(){
  background(255);
  push();
  translate(x+10,y+10);
  rotate(radians(dir));
  dtb();
  pop();
}
