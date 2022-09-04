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
  drawBackground();
  moveBall();
  drawBall();
  


}
function drawBackground () {
  let widthOffset = width * .83333333
  let heightOffset = height * .83333333
  rectMode(CENTER);
  strokeWeight(0);
  rect(300, 300, heightOffset, widthOffset)
  fill(168);
}

function drawBall() {
   // draw the ball
   ellipse(positionX, positionY, radius * 2, radius * 2);
}

function moveBall () {
 // move the ball
 positionX = positionX + velocityX;
 positionY = positionY + velocityY;

 const rightEdge = width - 50;
 const leftEdge = 50;
 const topEdge = 50;
 const bottomEdge = height - 50;

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

}