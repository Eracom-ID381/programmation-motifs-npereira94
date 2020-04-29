function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);

}

function draw() {
  background(255);
  fill(255);
  for (let x = 1; x <= width + 10; x += 10) {
    for (let y = 2; y <= height - 20; y += 20) {


      circle(x, y, 1);


    }
  }
}


function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}