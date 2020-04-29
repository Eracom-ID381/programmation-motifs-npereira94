function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {


  fill(100);
  for (let x = 5; x <= width - 10; x += 10) {
    for (let y = 8; y <= height - 10; y += 10) {
      triangle(x, 1, 1, height / 2, x, height);

    }
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}