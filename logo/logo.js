console.log(29);
let sc = [0,0,0];
let pc = [255,255,255];
let input, button;
let fc = [255,255,255];
let cmd = '';
//let inp = createInput();
function greet(){
  const name = input.value();
  console.log(name);
  input.value('');
}
function dtb(){
  stroke(0);
  let x, y = 400;
  strokeWeight(1);
  fill(sc[0],sc[1],sc[2]);
  rect(20,20,x,y);
}
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
}
