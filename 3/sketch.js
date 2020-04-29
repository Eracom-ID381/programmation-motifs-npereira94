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

      line(1, x, x, 100);
      line(100, x, x, 1);
      line(1, x, x, 1);

      line(1, x, x, 250);
      line(250, x, x, 1);
      line(1, x, x, 1);

      line(1, x, x, 500);
      line(500, x, x, 1);
      line(1, x, x, 1);

      line(x, 1, 1000, x);
      line(x, 1000, 1, x);
      line(1, y, y, 1);

      line(x, 1, 1500, x);
      line(x, 1500, 1, x);
      line(1, y, y, 1);

      line(x, 1, 2000, x);
      line(x, 2000, 1, x);
      line(1, y, y, 1);
    }
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}