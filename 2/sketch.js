function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {
  background(255);
  noFill();


  for (let x = 1; x <= width - 30; x += 20) {
    for (let y = 2; y <= height - 30; y += 1) {

      circle(x, y, 1);
    }
  }
  for (let x = 50; x <= width - 30; x += 20) {
    for (let y = 50; y <= height - 30; y += 10) {

      ellipse(x, y, random(0, 50), random(0, 100));
    }
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}