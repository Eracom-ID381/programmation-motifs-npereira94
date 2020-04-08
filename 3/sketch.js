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
    for (let y = 100; y <= height - 100; y += 100) {
      line(0, x, x, 1000);
      line(1000, x, x, 0);

    }
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}