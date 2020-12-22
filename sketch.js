const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,paper;
var dust1,dust2,dust3;


function setup (){
createCanvas(1600,700);
rectMode(CENTER);


engine = Engine.create();
world = engine.world;
Engine.run(engine);


dust1 = new Dustbin(1300,665,170,20);
dust2 = new Dustbin(1205,615,20,120);
dust3 = new Dustbin(1395,615,20,120);


paper = new Paper(100,300,10);
ground=new Ground(800,690,1600,20);
	
	
	World.add(world,ground);



}

function draw(){

	background(0);
	Engine.update(engine);
	rectMode(CENTER);


	
	paper.display();
	dust1.display();
	dust2.display();
	dust3.display();
	ground.display();
	
}

function keyPressed(){

if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position,{
		x: 13,
		y: -14
	});
}

}








