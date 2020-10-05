
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  
}

function setup() 
{
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(200,450,40);
	
	dustbin1 = new Dustbin(width/2+660,610,20,100);
	dustbin2 = new Dustbin(width/2+550,650,200,20);
    dustbin3 = new Dustbin(width/2+450,610,20,100);
	ground = new Ground(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(255);

  paper.display();
  dustbin1.display()
  dustbin2.display();
  dustbin3.display();
  ground.display();
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-95})
	}
}



