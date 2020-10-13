var y = 100;
var x =100;
var n =0;
function setup() {
  // put setup code here
   createCanvas(1200, 1200);
   frameRate(200);
   stroke(0);
//apples
}

function draw() {
  y=y+1;
  x=x+1;
  n=n+1;
  push();
  translate(width * 0,2, height * 0.5);
  polygon(100,100,90,10000)
  pop();
  if (y<0) {
//    y=height;
  }
  line(x,y,x,y);
  line(1, 10, 10, 1);
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
  // put drawing code here
//  for (var i=0; i=n; i++){
//    line(100,100,1000,n);
//    line(1000,100,1000,n+1);
//    n=n+1;



///background(255, 0, 0);
