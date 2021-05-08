
var ground;
var bar1; 
var bob1,bob2,bob3,bob4,bob5,chain1
var chain2,chain3,chain4,chain5


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Bar(400,700,800,50);
bar1 = new Bar(400,200,400,30);
bob1 = new Bob (140,300,40)
bob2 = new Bob (150,300,40)
bob3 = new Bob (160,300,40)
bob4 = new Bob (170,300,40)
bob5 = new Bob (180,300,40)

chain1 = new chain(bob1.body,{x:430,y:210})
chain2= new chain(bob2.body,{x:400,y:210})
chain3 = new chain(bob3.body,{x:340,y:210})
chain4 = new chain(bob4.body,{x:450,y:210})
chain5 = new chain(bob5.body,{x:480,y:210})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bar1.display();

 chain1.display();
 chain2.display();
 
 chain3.display();
 
 chain4.display();
 
 chain5.display();
 

  drawSprites();
 
}



