console.log(47);
let sc = [255,255,255];
let pc = [255,255,255];
let input,button;
let fc = [255,255,255];
let cmd = '';
let x = 300, y = 300, dir = 0;
//draw turtle
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
