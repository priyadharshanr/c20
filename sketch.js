var pic;
var picImg;
var man;
var manImg
function preLoad(){
 picImg = loadImage("assets/iss.png");
 manImg = loadImage("assets/sleep.png");

}
function setup() {
  createCanvas(windowWidth, windowHeight);
   
  pic = createSprite(500,500,100,100);
  pic.addImage(picImg);
  
  man=createSprite(200,200,20,20);
  man.addImage(manImg);
 
}

function draw() {
  background(0);  
  drawSprites();
}