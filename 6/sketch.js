function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  let x = 0;
  canvas.parent('canvas');
  background(255);
  noLoop();
}

function draw() {
  background(204);
  x = x + 100;
  if (x > width) {
    x = 0;
  }
  line(x, 200, x, height);
}


function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}

horizontal line moves slowly from left.Loops but stops on mouse press.
function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}