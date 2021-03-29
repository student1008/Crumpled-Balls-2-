// creating constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
// creating variables
var dustbinObj, paperObject,groundObject	
var world;
// creating function setup

function setup() {
// creating canvas or workspace	
	createCanvas(1600, 700);
// creating rectangle towards the center
	rectMode(CENTER);

// creating engine
	engine = Engine.create();
// creating world.engine 	
	world = engine.world;
// creating new object dustbin	
	dustbinObj=new dustbin(1200,650);
// creating new object paper	
	paperObject=new paper(200,450,40);
// creating new object Ground	
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	
// creating variable render
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}

// creating function draw
function draw() {
  rectMode(CENTER);
  background(0);
 // displaying objects
  dustbinObj.display();                                                                                                                       
  paperObject.display();
  groundObject.display();
  
  
// creating function key pressed
function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}

