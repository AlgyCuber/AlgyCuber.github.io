console.log(23);
let sc = [255,255,255];
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
function setup(){
  createCanvas(601,601);
  input = createInput();
  input.position(20, 65);
  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);
}
function draw(){
  background(255);
  stroke(0);
  strokeWeight(1);
  fill(sc[0],sc[1],sc[2]);
  rect(0,0,600,600);
}
