//
// Bounce1
// A simple bouncing ball - it has perfect bounces,
// it never slows down.

// These variables store the position, size, and speed.
let positionX = 300;
let positionY = 300;
let radius = 20;
let velocityX = 3;
let velocityY = 5;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  // move the ball
  positionX = positionX + velocityX;
  positionY = positionY + velocityY;

  const rightEdge = width;
  const leftEdge = 0;
  const topEdge = 0;
  const bottomEdge = height;

  // test to see if it hit an edge
  if (positionX + radius > rightEdge) {
    // hit the right edge
    velocityX = velocityX * -1;
    positionX = rightEdge - radius;
  }
  else if (positionX - radius < leftEdge) {
    // hit the left edge
    velocityX = velocityX * -1;
    positionX = leftEdge + radius;
  }

  if (positionY + radius > bottomEdge) {
    // hit the bottom edge
    velocityY = velocityY * -1;
    positionY = bottomEdge - radius;
  }
  else if (positionY - radius < topEdge) {
    // hit the top edge
    velocityY = velocityY * -1;
    positionY = topEdge + radius;
  }

  // draw the ball
  ellipse(positionX, positionY, radius * 2, radius * 2);
}
