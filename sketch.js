var moving_rect, fixed_rect;

function setup() {
  createCanvas(1200,800);
  fixed_rect = createSprite(400, 200, 50, 50);
  moving_rect = createSprite(100,100,80,30);
  fixed_rect.shapeColor = "pink";
  moving_rect.shapeColor = "pink";
}

function draw() {
  background(0);
  moving_rect.x = mouseX
  moving_rect.y = mouseY

  if(moving_rect.x - fixed_rect.x < moving_rect.width/2 + fixed_rect.width/2 
    && fixed_rect.x - moving_rect.x < moving_rect.width/2 + fixed_rect.width/2
    && moving_rect.y - fixed_rect.y < moving_rect.height/2 + fixed_rect.height/2
    && fixed_rect.y - moving_rect.y < moving_rect.height/2 + fixed_rect.height/2
    ){
    moving_rect.shapeColor = "orange";
    fixed_rect.shapeColor = "orange";
  }

  else{
    moving_rect.shapeColor = "pink";
    fixed_rect.shapeColor = "pink";
  }
  drawSprites();
}