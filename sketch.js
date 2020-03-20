const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;
var ball;
var rstring;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(250, 200, 50, 50);
    rstring = new RString(ball.body, {x: 200, y: 100});

}

function draw(){
    background("blue");
    Engine.update(engine);
    ball.display();
    rstring.display();
    ball.depth = rstring.depth + 1;

}

function keyPressed(){

    if(keyCode === 32){

        Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
        console.log("hit");

    }

}