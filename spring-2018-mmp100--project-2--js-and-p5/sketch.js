function setup() {
  createCanvas(720, 400);
}

function draw() {
  stroke(255,0,0)
  fill(0,255,0)
  background(150);
  push();
  translate(width*0.5, height*0.5);
  star(7, 25, 30, 70, 5);
}
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/4.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
