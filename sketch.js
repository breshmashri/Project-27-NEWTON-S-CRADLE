const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var roof, ground;
var clock, clockImg;
var baby, babyImg;

function preload() {
  clockImg = loadImage("clockImg.png");
  babyImg = loadImage("babyImg.png");
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
  world = engine.world;
  
  clock = createSprite(100,165,10,10);
  clock.addImage(clockImg);
  clock.scale = 0.1;
  baby = createSprite(700,700,10,10);
  baby.addImage(babyImg);
  baby.scale = 0.1;
  
  //Create the Bodies Here.
  bobObject1 = new Bob(300,650,50);
  bobObject2 = new Bob(350,650,50);
  bobObject3 = new Bob(400,650,50);
  bobObject4 = new Bob(450,650,50);
  bobObject5 = new Bob(500,650,50);
  
  roof = new Roof(400,210,300,20);

  rope1 = new Rope(bobObject1.body, roof.body, -100);
  rope2 = new Rope(bobObject2.body, roof.body, -50);
  rope3 = new Rope(bobObject3.body, roof.body, 0);
  rope4 = new Rope(bobObject4.body, roof.body, 50);
  rope5 = new Rope(bobObject5.body, roof.body, 100);

	Engine.run(engine);
  
}


function draw(){
  background("pink");
  
  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-50, y:-50});
  }
}

