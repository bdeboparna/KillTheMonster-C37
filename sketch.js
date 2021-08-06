const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;

function preload() {
  backgroundImg = loadImage("images/Background.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,400,600,5);
  hero = new Hero(400,3,100,100);
  fly = new Fly(hero.body,{x:100,y:465});
  monster = new Monster(380,200,100,100);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(backgroundImg);

  hero.display();
  ground.display();
  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}