var fixedRect, movingRect;
function setup(){
  createCanvas(1200,800);
  fixedRect = createSprite(200,100,50,80);
  fixedRect.shapeColor  = "blue";
  movingRect = createSprite(200,400,80,30);
  movingRect.shapeColor  = "blue";
  movingRect.velocityY=-5;
  fixedRect.velocityY=5;
}

function draw(){
  background("lightblue");
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x <fixedRect.width/2 + movingRect.width/2 
     &&fixedRect.x-movingRect.x<fixedRect.width/2 + movingRect.width/2 &&
     movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2&& 
     fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2){
     fixedRect.shapeColor  = "red";
     movingRect.shapeColor  = "red";
  }
  else{
    fixedRect.shapeColor  = "green";
    movingRect.shapeColor  = "green";
  }
  if(movingRect.x - fixedRect.x <fixedRect.width/2 + movingRect.width/2 
    &&fixedRect.x-movingRect.x<fixedRect.width/2 + movingRect.width/2){
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
    }
    if(movingRect.y - fixedRect.y <fixedRect.width/2 + movingRect.width/2 
      &&fixedRect.y-movingRect.y<fixedRect.width/2 + movingRect.width/2){
        movingRect.velocityY= movingRect.velocityY * (-1);
        fixedRect.velocityY = fixedRect.velocityY * (-1);
      }
  drawSprites();
}

//50/2 = 25
//80/2 = 40
//40+25 = 65