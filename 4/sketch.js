function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {

  background(0)
  noFill();
  stroke(255);
  strokeWeight(1);
  for (let x = 10; x <= width - 10; x += 10) {
    for (let y = 6; y <= height - 10; y += 100) {
      bezier(x, y, x, random(0, 50), x, 900, y, x);

    }
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}