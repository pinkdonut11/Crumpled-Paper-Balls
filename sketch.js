
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball 

function preload()
{
	
}

function setup() {
	createCanvas(825, 725);


	engine = Engine.create();
	world = engine.world;

	ball_options={
		isStatic:true,
		restitution:0.3,
		friction:0,
		density:1.2 
	}

	//Create the Bodies Here.
  ball = Bodies.circle(200,100,20,ball_options)
  World. add(world,ball)

  groundObj=new Ground(width/2,670,width,20);
  leftSide=new Ground(1100,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display()
  Ground.display
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce (ball,{
			x:0,y:0
		  },{
			x:0,y:0.05
		  }
		  )
		  }
		  
		
	}

