function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);

}

function draw() {
  background(255);
  fill(0);
  for (let x = 1; x <= width; x += 1000) {
    for (let y = 20; y <= height; y += 2000) {

      circle(5, x / 2, y / 2);


    }
  }
}


function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}