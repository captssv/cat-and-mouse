var cat,catImg,catImg2,catImg4;
var garden,gardenImg;
var mouse,mouseImg,mouseImg2,mouseImg4;

function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    catImg=loadAnimation("images/cat2.png","images/cat3.png");
    catImg2=loadAnimation("images/cat1.png");
    catImg4=loadAnimation("images/cat4.png")

    mouseImg=loadImage("images/mouse1.png","images/mouse3.png");
    mouseImg2=loadImage("images/mouse2.png")
    mouseImg4=loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(600,600);

garden=createSprite(200,250,600,600);
garden.addImage(gardenImg);

 //create tom and jerry sprites here

    cat=createSprite(520,520,10,10);
    cat.addAnimation("catStanding",catImg2);
    cat.addAnimation("catRun1",catImg);
    cat.addAnimation("catSitting",catImg4);
    cat.scale=0.1;
    
    mouse=createSprite(70,520,10,10);
    mouse.addImage(mouseImg);
    mouse.scale=0.1;
}

function draw() {

    background(255);

   
   if (detect(cat,mouse)){
    cat.changeAnimation("catSitting",catImg4);
    mouse.changeAnimation("mouse2",mouseImg4);
   }
   else{
    cat.changeAnimation("catStanding");
   }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX=-5;

    mouse.addAnimation("mouse1",mouseImg2);
   mouse.changeAnimation("mouse1");

    cat.changeAnimation("catRun1");
}

}