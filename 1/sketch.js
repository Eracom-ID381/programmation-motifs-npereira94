function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {
  background(255);
  fill(0);
  for (let x = 10; x <= width - 20; x += 10) {
    for (let y = 10; y <= height - 50; y += 50) {
      line(x, y, x, 2000);
      line(0, y, 2000, y);
      rect(x, width / 2, 200, y);
    }
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}