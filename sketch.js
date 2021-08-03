var player ; 
var monster ;
var obstacles ;
var background;
var score;
var bullet;
var bulletGroup;

function preload(){
  
  // playerImage =loadAnimation("soldier_1.jpg","soldier_2.jpg","soldier_3.jpg","soldier_4.jpg","soldier_5.jpg","soldier_6.jpg","soldier_7.jpg")
  playerImage = loadAnimation("soldier_bg1.png","soldier_2-removebg-preview.png","soldier_3-removebg-preview.png","soldier_4-removebg-preview.png","soldier_5-removebg-preview.png","soldier_6-removebg-preview.png","soldier_7-removebg-preview.png","soldier_8-removebg-preview.png")
  obstacleImage =loadImage("obstacle.png");
  backgroundImage =loadImage("background10.jpg");
  treeImage =loadImage("treeimage2-removebg-preview.png");
}



function setup() {
    createCanvas(1200,600)
    background = createSprite(0,0,200,500)
    background.addImage(backgroundImage)
    background.scale = 8
    


  player = createSprite(400,300,20,20)
  player.addAnimation("playerImage",playerImage);
 // bulletGroup = createGroup(); 
  obstaclesGroup = createGroup();
  score = 0
  
}


function draw() {
  
  text("Score: "+ score, 500,50);
 background.velocityX = 2;
 if (background.x < 0){
  background.x = background.width/2;
}   
//if(bulletGroup.isTouching(obstaclesGroup)){
 // obstaclesGroup.destroyEach();
 // bulletGroup.destroyEach();
 
spawnObstacles();
 drawSprites();
   
}
//}

function spawnObstacles(){
  if (frameCount % 150 === 0){
    var obstacle = createSprite(700,250,20,100);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;
    
     //generate random obstacles
     var rand = Math.round(random(2));
     switch(rand) {
       case 1: obstacle.addImage(obstacleImage);
               break;
       case 2: obstacle.addImage(treeImage)        
       default: break;
     }
    
      obstacle.depth = player.depth;
     player.depth = player.depth + 1;
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.25;
     obstacle.lifetime = 500;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
     if (keyDown("space")) {
      createbullet();
      
    }
  }
  function createbullet() {
   // var bullet= createSprite(100, 100, 60, 10);
   // bullet.x = 360;
   // bullet.velocityX = -4;
   // bullet.lifetime = 100; 
   // bulletGroup.add(bullet);
  }
   
   
 
 
}
