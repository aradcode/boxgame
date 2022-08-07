
function setup() {
  createCanvas(1000,1000);
box=createSprite (500,500,50,50);
box.scale=5
box.shapeColor="red"
box.velocityX=3;
box.velocityY=4;
edges=createEdgeSprites()
}

function draw() 
{
  background(30);
  box.bounceOff (edges);
drawSprites ();
}




