const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    pig1= new Pig(700,320);
    pig2 = new Pig(760,320);
    pig3 = new Pig(820, 350);
    

    pig4= new Pig(720,240);
    pig5 = new Pig(780,240);
    pig6 = new Pig(880, 350);

    

   pig7 = new Pig(830,240);
   pig8 = new Pig(750,180);
   
    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    pig1.display();
    pig2.display();
    ground.display();
    pig3.display();
    

    pig4.display();
    pig5.display();
    pig6.display();
    

    pig7.display();
    pig8.display();
    

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display(); 

}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
if(keyCode===32){
    Matter.Body.setPosition(bird.body, {x: 200 , y: 50});
    slingshot.attach(bird.body);
}
}