function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  var y = 100
  var x = 50
  canvas.parent('canvas');
  background(255);

}

function draw() {
  background(255);
  fill(random(255), random(255), random(255))
  // ellipse(mouseX,mouseY,25,25);
  while (x < 3900) {
    x = x + 10;
    ellipse(x, y, 10, 10);
  }
  if (x >= 1000) {
    x = 10
    y = y + 10
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}