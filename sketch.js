var fixedRect, movingRect;
var o1,o2,o3,o4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  o1=createSprite(100,100,50,50)
  o2=createSprite(200,100,50,50)
  o3=createSprite(300,100,50,50)
  o4=createSprite(400,100,50,50)

  f= createSprite(400, 100, 50, 80);
  f.shapeColor = "green";
  f.debug = true;
  m = createSprite(400, 800,80,30);
m.shapeColor = "green";
  m.debug = true;

  m.velocityY = -5;
  f.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,o4)){
  movingRect.shapeColor = "red";
  o4.shapeColor = "red";
 }
 else {
  movingRect.shapeColor = "green";
  o4.shapeColor = "green";
}
bounceOff(m,f);
  drawSprites();
}
