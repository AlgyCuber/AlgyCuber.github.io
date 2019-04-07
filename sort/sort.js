let alg = 0; //0 = bubble
let sel;
function setup(){
  createCanvas(windowWidth,windowHeight);
  defaultCanvas0.style.position = 'absolute';
  defaultCanvas0.style.top = '0px';
  defaultCanvas0.style.left = '0px';
  sel = createSelect();
  sel.position(32,32);
  sel.option('Bubble Sort');
}
function draw(){
  background(255);
}
