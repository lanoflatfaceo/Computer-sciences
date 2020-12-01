var y = 100;
var x =100;
var n =0;
const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;
var width=(Math.random()*500)+100;
var decimal=Math.random();
var sides=10;
var y2=1;
function setup() {

  // put setup code here
   createCanvas(2400, 2400, WEBGL);
   frameRate(200);
   stroke(0);
   b1 = color(255);
   b2 = color(0);
   c1 = color(204, 102, 0);
   c2 = color(0, 102, 153);
   //noLoop();
//apples
  for (let i = 10; i < width; i += 10) {
    // If 'i' divides by 20 with no remainder draw the first line
    // else draw the second line
    if (i % 20 === 0) {
      stroke(0);
      line(i, 80, i, height / 2);
    } else {
      stroke(15);
      line(i, 20, i, 180);
    }
  }
  for (let y=110; y<120; y+=1){
    noFill();
    stroke(0);
    push();
    translate(500, height * decimal, width);
    sphere(300);
    pop();
  }
  background(250);
  rotateY(frameCount * 0.01);


}

function draw() {
  y=y+1;
  x=x+1;
  n=n+1;

  stroke(0);
  for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 80; i++) {
      translate(
        sin(frameCount * 0.001 + j) * 40,
        sin(frameCount * 0.001 + j) * 10,
        i * 0.1
      );
      rotateZ(frameCount * 0.002);
      push();
      sphere(8, 6, 4);
      pop();
    }
    pop();
  }

  noFill();
  stroke(0);
  push();
  rotate(frameCount / -20000.0);
  translate(width * 0,2, height * 0.5);
  polygon(100,100,9,5);
  pop();

  push();
  translate(width * 0.2, height * 0.5);
  rotate(frameCount / 200.0);
  polygon(2000, 2000, 82, 3);
  pop();

  if (y<0) {
    y=height;
  }
  line(x,y,x,y);

  line(1, 10, 10, 1);

  noStroke();
  fill(50);
  push();
  translate(-275, 175);
  rotateY(1.25);
  rotateX(-0.9);
  box(100);
  pop();

  noFill();
  stroke(0);
  push();
  translate(500, height * 0.35, -200);
  sphere(300);
  pop();

  noFill();
   stroke(127);
   push();
   translate(-100, height * 0.16, 200);
   sphere(75);
   pop();
  //setGradient(0, 0, 2500, height, b1, b2, X_AXIS);
  //setGradient(width / 2, 0, width / 2, height, b2, b1, X_AXIS);
  // Foreground
//  setGradient(50, 90, 540, 80, c1, c2, Y_AXIS);
//  setGradient(50, 190, 540, 80, c2, c1, X_AXIS);
}
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }

  endShape(CLOSE);
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
//function mousePressed() {
//  redraw();
//}
  // put drawing code here
//  for (var i=0; i=n; i++){
//    line(100,100,1000,n);
//    line(1000,100,1000,n+1);
//    n=n+1;



///background(255, 0, 0);
