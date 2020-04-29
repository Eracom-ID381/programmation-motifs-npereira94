function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {
  background(255);
  fill(0);
  for (let x = 1; x <= width - 20; x += 10) {
    for (let y = 100; y <= height - 100; y += 100) {
      line(y, x, x, y);


    }
  }
  fill(255);
  for (let x = 1; x <= width - 30; x += 20) {
    for (let y = 2; y <= height - 30; y += 1) {

      circle(x, y, 10);

    }
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}