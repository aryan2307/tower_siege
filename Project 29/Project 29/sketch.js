const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,300,800,100);
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255,255,255);
  Engine.update(engine);
  drawSprites();
  ground.display();
}