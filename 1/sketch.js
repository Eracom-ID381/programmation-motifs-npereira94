function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {
  background(255);
  fill(0);
  for (let x = 1; x <= width - 10; x += 10) {
    for (let y = 1; y <= height - 10; y += 10) {
      line(x, y, x, 2000);
      line(0, y, 2000, y);
      rect(10, 10, 10, 10);

    }
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}