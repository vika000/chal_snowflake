
let framesEllapsed = 0;

function setup(){
  createCanvas(720, 400);
  frameRate(24); //number of frames displayed per second
}

function draw(){
  framesEllapsed++;
  console.log(framesEllapsed);
  background(255);
  snowflake(mouseX, mouseY, random(width/4), random(255), random(10), random(10));
  snowflake(mouseX/2, mouseY/2, random(width/4), random(255), random(10), random(10));


}

function snowflake(x, y, size, alphas, numberOfTwigs, twigLength ){
//always has 6 branches
  let x1 = x;
  let y1 = y;
  let branchDiff = size / numberOfTwigs;

  // let x2 = x1;
  // let y2 = y1+size;

  translate(x1, y1);
  stroke(0,0,255, alphas);
  for (let i = 0; i < 6; i++) {
    let rotation = 60;
    push();
    rotate(radians(rotation*i));
    line(0,0,0,size);
    //let subBranchVector = createVector(40, 50);
    for (let i = 1; i < numberOfTwigs; i++) {
      line(0, branchDiff*i, twigLength, branchDiff*i+twigLength);
      line(0, branchDiff*i, -twigLength, branchDiff*i+twigLength);
    }
    pop();
  }
}
