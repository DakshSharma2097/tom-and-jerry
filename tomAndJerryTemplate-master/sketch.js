//Name:Daksh Sharma
//Date:16oct2020
//Project:YOUR OWN INFINITE RUNNER GAME

var cat1,cat2,cat3,cat4;
var mouse1,mouse2,mouse3,mouse4;
var garden;
var catWalkImage, catSitImage;
var mouseTeaseImage, mouseStopImage;

function preload() {
    //load the images here
    backgroundImage = loadImage("images/garden.png");
    mouseTeaseImage = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseStopImage = loadAnimation("images/mouse4.png");
    catWalkImage = loadAnimation("images/cat2.png","images/cat3.png");
    catSitImage = loadAnimation("images/cat1.png");
    catStandImage = loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1206,700);
    background = createSprite(550,300,500,800);
    background.addImage(backgroundImage);
    background.scale = 1;

    //create tom and jerry sprites here 
    cat1=createSprite(width/1.3,height-200,-40,-40);
    cat1.addAnimation("CatWalking",catWalkImage);
    cat1.scale=0.15;
    cat2=createSprite(width/1.3,height-200,-40,-40);    
      
    mouse1 = createSprite(width/4,height-200,10,20);
    mouse1.addAnimation("MouseTeasing",mouseTeaseImage);
    mouse1.scale=0.08;
   
    mouse2 = createSprite(width/4,height-200,10,20);
}

function draw() {
    //Write condition here to evalute if tom and jerry collide
    drawSprites();
    keyPressed();
    
    if (cat1.isTouching(mouse1)) {
        cat1.scale=0.001;
        cat2.addAnimation("CatSit",catStandImage);
        cat2.x=365;
        cat2.scale=0.13;
        mouse1.scale=0.001;
        mouse2.addAnimation("MouseStop",mouseStopImage);
        mouse2.scale=0.08;
    }
        
   
}

function keyPressed(){
    if (keyDown("right") ){
        cat1.x=cat1.x+3;
    }

    if(keyDown("left") ){
       cat1.x=cat1.x-3;
    }
    
}
   