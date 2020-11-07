var firstrect,secondrect;


function setup() {
  createCanvas(800,400);
  firstrect=createSprite(200,200,150,100);
  firstrect.shapeColor="green"
  secondrect=createSprite(400,400,150,100);
  secondrect.shapeColor="green"
  firstrect.debug=true;
  secondrect.debug=true;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(firstrect.x-secondrect.x<firstrect.width/2+secondrect.width/2 && firstrect.x-secondrect.x<firstrect.width/2+secondrect.width/2
    && firstrect.y-secondrect.y<firstrect.height/2+secondrect.height/2 && firstrect.y-secondrect.y<firstrect.height/2+secondrect.height/2){
    firstrect.shapeColor="blue"
    secondrect.shapeColor="blue"

  }
  else{
    firstrect.shapeColor="green"
    secondrect.shapeColor="green"
  }
  firstrect.x=mouseX
  firstrect.y=mouseY
}