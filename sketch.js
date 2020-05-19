
//Creating variables
var tom;
var ground;
//Setup function
function setup() {
  createCanvas(400,800);
  ground = createSprite(200,400,400,1600);
  ground.shapeColor="brown"
  tom= createSprite(200, 700, 30, 30);
  
}
//draw function
function draw() {
 //background colour=Black
  background(0);  
  //Allowing tom to move in different directions
  /*if(keyDown(UP_ARROW)){
    tom.y=tom.y-2;
  }

  if(keyDown(DOWN_ARROW)){
    tom.y=tom.y+2;
  }*/

  if(keyDown(LEFT_ARROW)){
    tom.x=tom.x-2;
  }

  if(keyDown(RIGHT_ARROW)){
    tom.x=tom.x+2;
  }

  ground.velocityY=+4;

  if(ground.y>800){
    ground.y=400;
  }
  drawSprites();
}
