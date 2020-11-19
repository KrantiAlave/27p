  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var holder
function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	holder = new Roof(400,150,360, 30);

	ball1 = new Bob(280,450,50);
	ball2 = new Bob(340,450,50);
	ball3 = new Bob(400,450,50);
	ball4 = new Bob(460,450,50);
	ball5 = new Bob(520,450,50);

	rope1 = new Roop(ball1.body, {x : 280, y : 150});
	rope2 = new Roop(ball2.body, {x : 340, y : 150});
	rope3 = new Roop(ball3.body, {x : 400, y : 150});
	rope4 = new Roop(ball4.body, {x :460, y : 150});
	rope5 = new Roop(ball5.body, {x : 520, y : 150});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  holder.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
  Matter.Body.applyForce(ball1.body, ball1.body.position, {x : -100, y : -100});
  }
}