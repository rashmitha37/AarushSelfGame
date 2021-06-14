const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg, player1Img, p1, p2, player2Img, quaffle, quaffImg;
var playerCount=0, gameState=0;
var form, game, player, hoop, hoopImg;
var allPlayers, goal=0, form;
var teams=[];


var playerCount=0, gameState=0;
//var form, game, player;

function preload(){
bg=loadImage("Img/bng.png")
player1Img=loadImage("Img/p1.png")
player2Img=loadImage("Img/p2.png")
hoopImg=loadImage("Img/RealHoop.png")
quaffImg=loadImage("Img/Quaffle.png")
}


function setup(){
  var canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create();
    world = engine.world;
    //quaffle=new Quaffle(displayWidth/2-100, displayHeight/2,70)

    
   
    
   
  database = firebase.database();
  console.log(database);
  game=new Game()
  game.getState()
  game.start()
  
  
}

function draw(){
  //background("black");
  Engine.update(engine);
  background(bg)
    
 

  if(playerCount===2){
    game.update(1)
  }

  if(gameState===1){
  //  clear();
    game.play();

  }

//form.display();

 
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
    player.y += -20
    player.update()
  } else if (keyCode === DOWN_ARROW) {
    player.y += 20
    player.update()
  }
}

