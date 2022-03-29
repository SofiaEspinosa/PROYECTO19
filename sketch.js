var road,player,opp1,opp2,opp3;
var roadImg,playerImg,opp1Img,opp2Img,opp3Img;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
roadImg=loadImage("road.png")
playerImg=loadImage("car.png")
opp1Img=loadImage("car1.jpeg")
opp2Img=loadImage("car2.png")
opp3Img=loadImage("car3.png")
endImg=loadImage("gameover.png")
}

function setup() {
    createCanvas(windowWidth,windowHeight);

road=createSprite(width/2,200);
road.addImage(roadImg)
road.velocityY=4;

player=createSprite(width/2,height-20,20,20);
player.addImage(playerImg);
player.scale=2

opp1G= new Group();
opp2G= new Group();
opp3G= new Group();

}

function draw() {
 if(gameState===PLAY){
  background(0);
player.x=World.mouseX;



if(road.y > height){
    road.y = height/2;
}

createOpp1();
createOpp2();
createOpp3();

if(opp1G.isTouching(player)){
    gameState=END;
    player.addImage(endImg);
    player.x=width/2;
    player.y=height/2;
    player.scale=0.6;

    opp1G.destroyEach();
    opp2G.destroyEach();
    opp3G.destroyEach();

    opp1G.setVelocityYEach(0);
    opp2G.setVelocityYEach(0);
    opp3G.setVelocityYEach(0);
}
else if(opp2G.isTouching(player)){
    gameState=END
    player.addImage(endImg);
    player.x=width/2;
    player.y=height/2;
    player.scale=0.6;

    opp1G.destroyEach();
    opp2G.destroyEach();
    opp3G.destroyEach();

    opp1G.setVelocityYEach(0);
    opp2G.setVelocityYEach(0);
    opp3G.setVelocityYEach(0);
}
else if(opp3G.isTouching(player)){
    gameState=END
    player.addImage(endImg);
    player.x=width/2;
    player.y=height/2;
    player.scale=0.6;

    opp1G.destroyEach();
    opp2G.destroyEach();
    opp3G.destroyEach();

    opp1G.setVelocityYEach(0);
    opp2G.setVelocityYEach(0);
    opp3G.setVelocityYEach(0);
 }
 }
 drawSprites();
}

function createOpp1() {
    if (World.frameCount % 200 == 0) {
    var opp1 = createSprite(Math.round(random(50, width-50),40, 10, 10));
    opp1.addImage(opp1Img);
    opp1.scale=2;
    opp1.velocityY = 5;
    opp1.lifetime = 200;
    opp1G.add(opp1);
    }
  }
  
  function createOpp2() {
    if (World.frameCount % 320 == 0) {
    var opp2 = createSprite(Math.round(random(50, width-50),40, 10, 10));
    opp2.addImage(oppImg);
    opp2.scale=2;
    opp2.velocityY = 5;
    opp2.lifetime = 200;
    opp2G.add(opp2);
  }
  }
  
  function createOpp3() {
    if (World.frameCount % 410 == 0) {
    var opp3 = createSprite(Math.round(random(50, width-50),40, 10, 10));
    opp3.addImage(opp3Img);
    opp3.scale=2;
    opp3.velocityY = 5;
    opp3.lifetime = 200;
    opp3G.add(opp3);
    }
  }
  