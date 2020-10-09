var maze,mazeImage;
var player,enemyPlayer;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29;
var block,block1,block2;
var treasureBox,treasureBoxImage,key,keyImage;
var wallSound;
var bush,bush1,bush2,bush3,bushImage,bush1Image,bush2Image,bush3Image;
var restart,restartImage;


function preload() {
  bushImage = loadImage("sprites/bush.png");
  bush1Image = loadImage("sprites/bush1.png");
  bush2Image = loadImage("sprites/bush2.png");
  bush3Image = loadImage("sprites/bush3.png");
  wallSound = loadSound("sounds/wallhit.mp3");
  restartImage = loadImage("sprites/restart.png")
  mazeImage = loadImage("sprites/maze.png");
  treasureBoxImage = loadAnimation("sprites/treasureboxclosed.png","sprites/treasureboxopen.png");
  fireImage = loadImage("sprites/fire.png");
  keyImage = loadImage("sprites/key.png");
  playerImage = loadAnimation("sprites/playerfront.png");
  enemyPlayerImage = loadImage("sprites/ghost.png");
  playerRightImage = loadAnimation("sprites/playerright.png","sprites/playerrightwalk1.png","sprites/playerrightwalk2.png");
  playerLeftImage = loadAnimation("sprites/playerleft.png","sprites/playerleftwalk1.png","sprites/playerleftwalk2.png");
  playerUpImage = loadAnimation("sprites/playerbackwalk1.png","sprites/playerbackwalk2.png");
  playerDownImage = loadAnimation("sprites/playerfront.png","sprites/playerwalking1.png","sprites/playerwalk2.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  //maze = createSprite(600,500,400,400);
  //maze.scale=0.5
  //maze.addImage(mazeImage);
  player = createSprite(200,200);
  bush = createSprite(900,50,50,50);
  bush.addImage(bushImage);
  bush.scale = 0.1;
  bush1 = createSprite(870,385,50,50);
  bush1.addImage(bush1Image);
  bush1.scale = 0.1;
  bush2 = createSprite(375,305,50,50);
  bush2.addImage(bush2Image);
  bush2.scale = 0.1;
  bush3 = createSprite(630,415,50,50);
  bush3.addImage(bush3Image);
  bush3.scale = 0.1;
  enemyPlayer = createSprite(100,50,10,10);
  enemyPlayer.addImage(enemyPlayerImage);
  enemyPlayer.scale=0.1;
  treasureBox = createSprite(870,390,10,10);
  treasureBox.addAnimation("treasurebox", treasureBoxImage);
  treasureBox.scale = 0.1
  key= createSprite(100,60,5,5);
  key.addAnimation("key", keyImage);
  key.scale=0.15;
  player.addAnimation("standingPlayer", playerImage);
  player.addAnimation("rightPlayer",playerRightImage);
  player.addAnimation("leftPlayer",playerLeftImage);
  player.addAnimation("upPlayer",playerUpImage);
  player.addAnimation("downPlayer",playerDownImage);
  block = createSprite(600,277,10,10);
  block1 = createSprite(580,295,10,10);
  block2 = createSprite(580,260,10,10);
  block3 = createSprite(500,35,10,10);
  block4 = createSprite(500,80,10,10);
  block5 = createSprite(470,55,10,10);
  player.scale = 0.5;
  restart = createSprite(500,210,50,50);
  restart.addImage(restartImage);
  restart.scale = 0.1;

  wall1 = createSprite(15,10,20,900);
  wall1.visible = false;
  wall2 = createSprite(500,10,950,20);
  wall2.visible = false;
  wall3 = createSprite(970,10,20,900);
  wall3.visible = false;
  wall4 = createSprite(500,450,950,20);
  wall4.visible = false;
  wall5 = createSprite(0,295,295,25);
  wall5.visible = false;
  wall5.debug = false;
  wall2.debug = false;

  wall6 = createSprite(230,174,270,20);
  wall6.visible = false;
  wall7 = createSprite(500,174,125,20);
  wall7.visible = false;
  wall8 = createSprite(637,240,195,20);
  wall8.visible = false;
  wall9 = createSprite(540,390,135,20);
  wall9.visible = false;
  wall10 = createSprite(590,90,65,20);
  wall10.visible = false;

  wall11 = createSprite(630,320,95,20);
  wall11.visible = false;
  wall12 = createSprite(230,390,95,30);
  wall12.visible = false;
  wall13 = createSprite(240,90,25,165);
  wall13.visible = false;
  wall13.debug = false;
  wall14 = createSprite(107,138,25,70);
  wall14.visible = false;
  wall14.debug = false
  wall15 = createSprite(720,175,25,150);
  wall15.visible = false;

  wall16 = createSprite(625,110,25,175);
  wall16.visible = false;
  wall17 = createSprite(450,130,25,85);
  wall17.visible = false;
  wall18 = createSprite(380,60,25,85);
  wall18.visible = false;
  wall19 = createSprite(485,320,25,160);
  wall19.visible = false;
  wall20 = createSprite(590,350,25,80);
  wall20.visible = false;

  wall21 = createSprite(670,346,25,115);
  wall21.visible = false;
  wall22 = createSprite(365,400,25,90);
  wall22.visible = false;
  wall23 = createSprite(270,320,25,165);
  wall23.visible = false;
  wall24 = createSprite(360,205,25,90);
  wall24.visible = false;
  wall25 = createSprite(555,205,25,90);
  wall25.visible = false;

  wall26 = createSprite(175,205,25,90);
  wall26.visible = false;
  wall26.debug = false;
  wall27 = createSprite(860,205,25,110);
  wall27.visible = false;
  wall28 = createSprite(800,60,25,110);
  wall28.visible = false;
  wall28.debug = false;
  wall29 = createSprite(790,400,25,110);
  wall29.visible = false;
  player.debug = false;
  player.setCollider("circle",0,0,20);
  enemyPlayer.debug = false;
  enemyPlayer.velocityX = 3;
  enemyPlayer.velocityY = 0 ;
  block.velocityX = -0.5;
  block1.velocityX = +0.5;
  block2.velocityX = +0.5;
  block3.velocityX = -0.5;
  block4.velocityX = -0.5;
  block5.velocityX = 0.5;
  enemyPlayer.setCollider("circle",0,0,30);
}

function draw() {
  background(mazeImage);  
  textSize(20);
  
  restart.visible = false;
  

    
    reset();
  
  drawSprites();
  playerMovement();
  //console.log(mouseX + ";" + mouseY);
  playerWallHit();
  ghostControl();
  //soundControlls();
  win();

  }

  function reset() {
  if (player.isTouching(enemyPlayer)||player.isTouching(block)||player.isTouching(block1)||player.isTouching(block2)||player.isTouching(block3)||
  player.isTouching(block4)||player.isTouching(block5)) {
    
    restart.visible = true;
    player.velocityX = 0;
    player.velocityY = 0;
    enemyPlayer.velocityX = 0;
    enemyPlayer.velocityY = 0;
    block.velocityX = 0;
    block1.velocityX = 0;
    block2.velocityX = 0;
    block3.velocityX = 0;
    block4.velocityX = 0;
    block5.velocityX = 0;
    block.velocityY = 0;
    block1.velocityY = 0;
    block2.velocityY = 0;
    block3.velocityY = 0;
    block4.velocityY = 0;
    block5.velocityY = 0;
    text("you lost better luck next time", 400, 200);
    textSize(20);
    if (mousePressedOver(restart)) {
    restart.visible = false;
    block.velocityX = -0.5;
  block1.velocityX = +0.5;
  block2.velocityX = +0.5;
  block3.velocityX = -0.5;
  block4.velocityX = -0.5;
  block5.velocityX = 0.5;
    player.x = 200;
    player.y = 200;
    enemyPlayer.velocityX = 3;
  enemyPlayer.velocityY = 0 ;
    enemyPlayer.bounceOff(wall13);
    if (enemyPlayer.isTouching(wall1)) {

      enemyPlayer.velocityX = 0;
    enemyPlayer.velocityY = 2;
    
    }
    
    if (enemyPlayer.isTouching(wall5)) {
    
      enemyPlayer.velocityX = 0.5;
      enemyPlayer.velocityY = -2;
    
    }
    
    if (enemyPlayer.isTouching(wall2)) {
    
      enemyPlayer.velocityX = 2;
      enemyPlayer.velocityY = 0;
    
    }
  }


    
    }
  }
    
    
    
    function main() {
    
    if (player.isTouching(treasureBox)) {
    
      text("you won", 300, 200);
      textSize(20);
      
    
    }
    
    }
    
    function soundControlls() {
    
    if (player.isTouching(wall1) ) {
    
      wallSound.play();
    
    }
    
    if (player.isTouching(enemyPlayer) ) {
    
      //playSound("", false);
    
    }
    
    
    
    if (player.isTouching(block) ) {
    
      //playSound("", false);
    
    }
    
    if (player.isTouching(key) ) {
    
      //playSound("", false);
    
    }
    
    if (player.isTouching(treasureBox) ) {
    
      //playSound("", false);
    
    }

    } 
    



function playerMovement() {

  if(keyDown("RIGHT_ARROW") ){

  player.changeAnimation("rightPlayer",playerRightImage);
  player.velocityX = +2;
  player.velocityY = 0;

  }
  if(keyDown("LEFT_ARROW") ){

  player.changeAnimation("leftPlayer",playerLeftImage);
  player.velocityX = -2;
  player.velocityY = 0;
    
  }if(keyDown("UP_ARROW") ){

  player.changeAnimation("upPlayer",playerUpImage);
  player.velocityX = 0;
  player.velocityY = -2;

  }
  if(keyDown("DOWN_ARROW") ){

  player.changeAnimation("downPlayer",playerDownImage);
  player.velocityX = 0;
  player.velocityY = +2;

  }


}

function playerWallHit(){

player.collide(wall1);
player.collide(wall2);
player.collide(wall3);
player.collide(wall4);
player.collide(wall5);
player.collide(wall6);
player.collide(wall7);
player.collide(wall8);
player.collide(wall9);
player.collide(wall10);
player.collide(wall11);
player.collide(wall12);
player.collide(wall13);
player.collide(wall14);
player.collide(wall15);
player.collide(wall16);
player.collide(wall17);
player.collide(wall18);
player.collide(wall19);
player.collide(wall20);
player.collide(wall21);
player.collide(wall22);
player.collide(wall23);
player.collide(wall24);
player.collide(wall25);
player.collide(wall26);
player.collide(wall27);
player.collide(wall28);
player.collide(wall29);

block.bounceOff(wall1);
block.bounceOff(wall2);
block.bounceOff(wall3);
block.bounceOff(wall4);
block.bounceOff(wall5);
block.bounceOff(wall6);
block.bounceOff(wall7);
block.bounceOff(wall8);
block.bounceOff(wall9);
block.bounceOff(wall10);
block.bounceOff(wall11);
block.bounceOff(wall12);
block.bounceOff(wall13);
block.bounceOff(wall14);
block.bounceOff(wall15);
block.bounceOff(wall16);
block.bounceOff(wall17);
block.bounceOff(wall18);
block.bounceOff(wall19);
block.bounceOff(wall20);
block.bounceOff(wall21);
block.bounceOff(wall22);
block.bounceOff(wall23);
block.bounceOff(wall24);
block.bounceOff(wall25);
block.bounceOff(wall26);
block.bounceOff(wall27);
block.bounceOff(wall28);
block.bounceOff(wall29);

enemyPlayer.bounceOff(wall13);
enemyPlayer.bounceOff(wall2);

block1.bounceOff(wall1);
block1.bounceOff(wall2);
block1.bounceOff(wall3);
block1.bounceOff(wall4);
block1.bounceOff(wall5);
block1.bounceOff(wall6);
block1.bounceOff(wall7);
block1.bounceOff(wall8);
block1.bounceOff(wall9);
block1.bounceOff(wall10);
block1.bounceOff(wall11);
block1.bounceOff(wall12);
block1.bounceOff(wall13);
block1.bounceOff(wall14);
block1.bounceOff(wall15);
block1.bounceOff(wall16);
block1.bounceOff(wall17);
block1.bounceOff(wall18);
block1.bounceOff(wall19);
block1.bounceOff(wall20);
block1.bounceOff(wall21);
block1.bounceOff(wall22);
block1.bounceOff(wall23);
block1.bounceOff(wall24);
block1.bounceOff(wall25);
block1.bounceOff(wall26);
block1.bounceOff(wall27);
block1.bounceOff(wall28);
block1.bounceOff(wall29);

block2.bounceOff(wall1);
block2.bounceOff(wall2);
block2.bounceOff(wall3);
block2.bounceOff(wall4);
block2.bounceOff(wall5);
block2.bounceOff(wall6);
block2.bounceOff(wall7);
block2.bounceOff(wall8);
block2.bounceOff(wall9);
block2.bounceOff(wall10);
block2.bounceOff(wall11);
block2.bounceOff(wall12);
block2.bounceOff(wall13);
block2.bounceOff(wall14);
block2.bounceOff(wall15);
block2.bounceOff(wall16);
block2.bounceOff(wall17);
block2.bounceOff(wall18);
block2.bounceOff(wall19);
block2.bounceOff(wall20);
block2.bounceOff(wall21);
block2.bounceOff(wall22);
block2.bounceOff(wall23);
block2.bounceOff(wall24);
block2.bounceOff(wall25);
block2.bounceOff(wall26);
block2.bounceOff(wall27);
block2.bounceOff(wall28);
block2.bounceOff(wall29);

block3.bounceOff(wall1);
block3.bounceOff(wall2);
block3.bounceOff(wall3);
block3.bounceOff(wall4);
block3.bounceOff(wall5);
block3.bounceOff(wall6);
block3.bounceOff(wall7);
block3.bounceOff(wall8);
block3.bounceOff(wall9);
block3.bounceOff(wall10);
block3.bounceOff(wall11);
block3.bounceOff(wall12);
block3.bounceOff(wall13);
block3.bounceOff(wall14);
block3.bounceOff(wall15);
block3.bounceOff(wall16);
block3.bounceOff(wall17);
block3.bounceOff(wall18);
block3.bounceOff(wall19);
block3.bounceOff(wall20);
block3.bounceOff(wall21);
block3.bounceOff(wall22);
block3.bounceOff(wall23);
block3.bounceOff(wall24);
block3.bounceOff(wall25);
block3.bounceOff(wall26);
block3.bounceOff(wall27);
block3.bounceOff(wall28);
block3.bounceOff(wall29);

block4.bounceOff(wall1);
block4.bounceOff(wall2);
block4.bounceOff(wall3);
block4.bounceOff(wall4);
block4.bounceOff(wall5);
block4.bounceOff(wall6);
block4.bounceOff(wall7);
block4.bounceOff(wall8);
block4.bounceOff(wall9);
block4.bounceOff(wall10);
block4.bounceOff(wall11);
block4.bounceOff(wall12);
block4.bounceOff(wall13);
block4.bounceOff(wall14);
block4.bounceOff(wall15);
block4.bounceOff(wall16);
block4.bounceOff(wall17);
block4.bounceOff(wall18);
block4.bounceOff(wall19);
block4.bounceOff(wall20);
block4.bounceOff(wall21);
block4.bounceOff(wall22);
block4.bounceOff(wall23);
block4.bounceOff(wall24);
block4.bounceOff(wall25);
block4.bounceOff(wall26);
block4.bounceOff(wall27);
block4.bounceOff(wall28);
block4.bounceOff(wall29);

block5.bounceOff(wall1);
block5.bounceOff(wall2);
block5.bounceOff(wall3);
block5.bounceOff(wall4);
block5.bounceOff(wall5);
block5.bounceOff(wall6);
block5.bounceOff(wall7);
block5.bounceOff(wall8);
block5.bounceOff(wall9);
block5.bounceOff(wall10);
block5.bounceOff(wall11);
block5.bounceOff(wall12);
block5.bounceOff(wall13);
block5.bounceOff(wall14);
block5.bounceOff(wall15);
block5.bounceOff(wall16);
block5.bounceOff(wall17);
block5.bounceOff(wall18);
block5.bounceOff(wall19);
block5.bounceOff(wall20);
block5.bounceOff(wall21);
block5.bounceOff(wall22);
block5.bounceOff(wall23);
block5.bounceOff(wall24);
block5.bounceOff(wall25);
block5.bounceOff(wall26);
block5.bounceOff(wall27);
block5.bounceOff(wall28);
block5.bounceOff(wall29);

//enemyPlayer.bounceOff(wall1);
enemyPlayer.bounceOff(wall2);
enemyPlayer.bounceOff(wall3);
enemyPlayer.bounceOff(wall4);
//enemyPlayer.bounceOff(wall5);
enemyPlayer.bounceOff(wall6);
enemyPlayer.bounceOff(wall7);
enemyPlayer.bounceOff(wall8);
enemyPlayer.bounceOff(wall9);
enemyPlayer.bounceOff(wall10);
enemyPlayer.bounceOff(wall11);
enemyPlayer.bounceOff(wall12);
enemyPlayer.bounceOff(wall13);
enemyPlayer.bounceOff(wall14);
enemyPlayer.bounceOff(wall15);
enemyPlayer.bounceOff(wall16);
enemyPlayer.bounceOff(wall17);
enemyPlayer.bounceOff(wall18);
enemyPlayer.bounceOff(wall19);
enemyPlayer.bounceOff(wall20);
enemyPlayer.bounceOff(wall21);
enemyPlayer.bounceOff(wall22);
enemyPlayer.bounceOff(wall23);
enemyPlayer.bounceOff(wall24);
enemyPlayer.bounceOff(wall25);
enemyPlayer.bounceOff(wall26);
enemyPlayer.bounceOff(wall27);
enemyPlayer.bounceOff(wall28);
enemyPlayer.bounceOff(wall29);


}

function ghostControl() {

//if (enemyPlayer.isTouching(wall13)) {

  //enemyPlayer.velocityX = -2;
  //enemyPlayer.y = 0;
  //console.log(enemyPlayer.x);
//}



if (enemyPlayer.isTouching(wall1)) {

  enemyPlayer.velocityX = 0;
enemyPlayer.velocityY = 2;

}

if (enemyPlayer.isTouching(wall5)) {

  enemyPlayer.velocityX = 0.5;
  enemyPlayer.velocityY = -2;

}

if (enemyPlayer.isTouching(wall2)) {

  enemyPlayer.velocityX = 2;
  enemyPlayer.velocityY = 0;

}

}



function main() {

if (player.isTouching(treasureBox)) {

  text("you won", 300, 200);
  textSize(20);

}

}

function soundControlls() {

if (player.isTouching(wall1) ) {

  wallSound.play();

}

if (player.isTouching(enemyPlayer) ) {

  //playSound("", false);

}



if (player.isTouching(block) ) {

  //playSound("", false);

}

if (player.isTouching(key) ) {

  //playSound("", false);

}

if (player.isTouching(treasureBox) ) {

  //playSound("", false);

}

}

async function win() {
var keyCollector = false;
player.debug = true;
key.debug = true
if (player.isTouching(key)) {
  console.log("keyCollector");

 key.visible = false;
keyCollector = true;

}
console.log(key.x + ";" + key.y);
if (player.isTouching(treasureBox)&&keyCollector) {
  
  text("you win", 400, 200);
  textSize(20);
  reset();
 
 }

}