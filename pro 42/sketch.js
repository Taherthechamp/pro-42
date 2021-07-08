var spacecraft,spacecraft_ANI,ISS,ISS_IMG,background_IMG,spacecraft_down;
var spacecraft_left,spacecraft_right;
var hasDocked=false
var invis_sprite;

function preload(){
  ISS_IMG = loadImage("images/iss.png");
  spacecraft_ANI = loadAnimation("images/spacecraft2.png");
  background_IMG=loadImage("images/spacebg.jpg")
  spacecraft_left=loadAnimation("images/spacecraft3.png")
  spacecraft_right=loadAnimation("images/spacecraft4.png")
spacecraft_down=loadAnimation("images/spacecraft1.png")
}

function setup() {
  createCanvas(800,400);
  ISS=createSprite(450,250)
  ISS.addImage(ISS_IMG);
  ISS.scale=1.4
  spacecraft=createSprite(450, 500, 50, 50);
  spacecraft.addAnimation("space",spacecraft_ANI);
  spacecraft.scale=0.3
  spacecraft.addAnimation("left",spacecraft_left)
  spacecraft.addAnimation("right",spacecraft_right)
  spacecraft.addAnimation("down",spacecraft_down);
  invis_sprite=createSprite(362,285,15,15);
  invis_sprite.shapeColor="yellow"
  spacecraft.setCollider("circle",10,-250,100);
  invis_sprite.visible=false
}

function draw() {
  createCanvas(1000, 600);
  background(background_IMG);
  
if(!hasDocked){
  spacecraft.x =spacecraft.x+Math.round(random(-1,1));
  if(keyDown("RIGHT_ARROW")){
    spacecraft.x=spacecraft.x+10
    spacecraft.changeAnimation("right",spacecraft_right)
  }
  if(keyDown("LEFT_ARROW")){
    spacecraft.x=spacecraft.x-10
    spacecraft.changeAnimation("left",spacecraft_left)
  }
  if(keyDown("UP_ARROW")){
    spacecraft.y=spacecraft.y-10
    spacecraft.changeAnimation("space",spacecraft_ANI)
  }
  if(keyDown("DOWN_ARROW")){
    spacecraft.y=spacecraft.y+10
    spacecraft.changeAnimation("down",spacecraft_down)
  }
}
if(spacecraft.isTouching(invis_sprite)){
  hasDocked=true
  textSize(50)
  text("Docking Successful!",450,500)
}
  drawSprites();
}