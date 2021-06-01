const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;

var log1;

var pig1;

var bird;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //player
    bird = new Birdy(100,100,100,10);

    box1 = new Box(300,350,50,50);

    log1 = new Log(550,350,100,10);

    pig1 = new Logy(700,350,100,150)

//consoles
console.log(bird);
//consoles

    ground = new Ground(600,395,1200,20);
}

function draw(){
    background(40,150,234);
    Engine.update(engine);

    box1.display();
   
    ground.display();

    log1.display();

 
    pig1.display();
  
   
    
    bird.display();

}