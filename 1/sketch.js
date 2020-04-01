function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {
  let x = 0;
  let y = 0;
  let z = 0;
  fill(0);
  while (x < width) {
    line(x, z / 2, x, 100);
    line(z, y / 2, x, x);
    line(y, x / 2, x, x);
    x = x + 30;
    y = y + 60;
    z = z + 120;
  }
  while (y < width) {
    ellipse(x, z / 2, x, 100);

    x = x + 6;
    y = y + 12;
    z = z + 24;
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}