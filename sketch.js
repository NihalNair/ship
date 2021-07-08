var ship, sea, shipImg1, seaImg;


function preload(){

  seaImg = loadImage("sea.png");

  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(400,400);
  
  ship = createSprite(0, 0, 200, 100);
  ship.addAnimation("moving", shipImg1);

  sea = createSprite(0, 0, 200, 50);
  sea.addImage(seaImg);
}

function draw() {
  background("blue");

sea.VelocityX = -3;

if(sea.x < 0 ){
  sea.x = sea.width/2;



}

}