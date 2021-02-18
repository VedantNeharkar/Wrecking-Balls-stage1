const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1,box2,box3,box4;
var ball,ground,rope;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,1200,20);
    box1 = new Box(900,100,70,70);
    //box1 - box6//x - 900 , box7 - box12 x - 800 , box 13 - 20 x - 700;
    ball = new Ball(200,200,80,80);
    rope = new Rope(ball.body,{x:500,y:50});





}


function draw(){
background(0,0,0);
Engine.update(engine);

ground.display()
box1.display





}