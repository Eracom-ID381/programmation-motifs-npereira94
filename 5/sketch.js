function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {
  background(255);
  fill(0);
  for (let x = 10; x <= width - 10; x += 10) {
    for (let y = 600; y <= height - 10; y += 100) {
      line(x, 100, y, 1000);



    }
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}