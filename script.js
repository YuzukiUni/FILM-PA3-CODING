/* exported setup, draw */
let seed = 100000;

const SkyColor = "#010935";
const HillColor = "#21273D";
const ForestColor = "#484F45";
const MoonColor = "#FCFCDD"
const VegaColor="#DCF5FE";
let angle = 0;
let Trails = false;
function preload() {
  // runs before setup 
  // use if you want to load any large files and want to make sure they load before setup()
}

function setup() {
  createCanvas(720,480).mousePressed(() => {
    
   Trails = !Trails;
  });
  createButton("reroll").mousePressed(() => { seed++;
    angle = 0;
  });
  //reference on https://www.geeksforgeeks.org/p5-js-anglemode-function/
  angleMode(DEGREES);
}
function draw() {
  randomSeed(seed);
  background(100);
  noStroke();
  //Set up the Rotate Speed
  angle -=2*random();

  // Create the night sky
  fill(SkyColor);
  rect(0, 0, width, height );
  
  //Create VegaStar
  fill(VegaColor);
  ellipse(360,180,30,30);
  
  //Create the star trails
  push();
  noFill();
  //reference on starter
 const starTrails = 100*random(0.5,1.5);
 for (let i = 0; i < starTrails; i++){
      let R = 255 ;
      let G = 255 ;
      let B = 255 ;
      let C=color(R,G,B);
         stroke(C);
   //make trails with different size ,some of them will bolder.
         strokeWeight(random(-1,2));
   //reference on
  // https://openprocessing.org/sketch/517311/
  //https://stackoverflow.com/questions/68747891/how-to-rotate-an-arc-using-trigonomentry-p5js
 //make star trails starts and end by the trails which like a loop
      let loop = width  * random();
   //each arc in different row will show different rotation speed, try to make star trials irregularly.
      let start = -360 * random(-1,1);
      let end=-360*Trails?start-angle*random():start++;
      arc(360,180, loop,loop, start, end);
    }
   pop();
  //Create Starry star with multiple color, reference on starter
   const starry = 100*random(0.5,1);
  for (let i = 0; i < starry; i++) {
    let x = width * random() + width / 100;
    let y = random(height/2);
    let d = width/500 * random(5);
    let r = random(150,255);
    let g = random(200,255);
    let b = random(230,255);
    let c = color(r, g, b);
    drawStarry(x, y, d, c);
  }
  
  //Create the hill, reference on Starter
   fill(HillColor);
  beginShape();
  vertex(0, height);
  const hill = 5;
  for (let i = 0; i < hill + 1; i++) {
    let x = (width * i) / hill;
    let y =height *3.5 / 5 - (random()*random()* height) / 3;
    vertex(x, y);
  }
  // vertex(width, height / 2);
  vertex(width, height);
  endShape(CLOSE);
  
  //Create the fog, reference on starter
   fill("rgba(255,255,255,0.15)");
  beginShape();
  vertex(0, height/1.5*random(0.5,1));
  const yuki = 20;
  for (let i = 0; i < yuki + 1; i++) {
    let x = (width * i) / yuki;
    let y=height/5 - (random() * random() * random() * height)/2 - height / 10;
    vertex(x, y/3*random(0.5,1));
  }
  // vertex(width, height / 2);
  vertex(width, height/1.5*random(0.5,1));
  endShape(CLOSE);
  
  //Create the forest, reference on starter
   fill(ForestColor);
  beginShape();
  vertex(0, height);
  const forest = 5;
  for (let i = 0; i < forest + 1; i++) {
    let x = (width * i) / forest;
    let y =
      height /6.5* 6 - (random()  *random()*random()* height) /10 - height / 50;
    vertex(x, y);
  }
  // vertex(width, height / 2);
  vertex(width, height);
  endShape(CLOSE);
  //Create the moon
  fill(MoonColor);
  //reference on starter
  ellipse(mouseX,50,50,50);
  
  
  //Reference on Starter
  function drawStarry(x, y, r, StarryColor){
    fill(StarryColor);
    ellipse(x, y, r);
  }


}