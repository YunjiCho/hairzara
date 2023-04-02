let x = 0;
let speed = 0.0005;
let txt =
  "자라나라머리머리자라나라머리머리자라나라머리머리자라나라머리머리자라나라머리머리자라나라머리머리";
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let len = 8;
  background('tomato');
  translate(width / 2, height / 2);

  for (let i = 0; i < 50; i++) {
    for (let r = 10; r < 50; r += 5) {
      rotate(radians(r));
      
      text(txt, 30 + len * i + x, 30 + len * i);
      x = x -speed;
    }
  }
}
