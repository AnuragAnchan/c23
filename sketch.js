const Engine=Matter.Engine;//name spacing
const World=Matter.World;
const Bodies=Matter.Bodies;
var ground
var MyEngine,MyWorld;// variables
var car;
var b1;
var b2
var g1

function setup() {
  createCanvas(400,400);
  MyEngine= Engine.create();
  MyWorld=MyEngine.world;
  b1=new box(200,300,50,50);
  b2=new box(240,100,50,100)
  g1=new Ground(200,390,400,20);
}
function draw() {
  background("lightblue");  
  Engine.update(MyEngine);
  
  b1.display();
b2.display();
  g1.display();
 drawSprites();
} 