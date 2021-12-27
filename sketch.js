const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snowb;
var rn;

function preload() {
  rn = (Math.random())*3
  console.log(rn)
  if ((rn) < 2 ) {
    snowb = 'snow3.jpg'
  } else if ((rn) < 1) {
    snowb = 'snow2.jpg'
  } else {
    snowb = 'snow1.jpg'
  }
  bg = loadImage(snowb)
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  s1 = new Snow((Math.random())*800, 0, 40, 40,(Math.random())*360)
  s2 = new Snow((Math.random())*800, -15, 40, 40,(Math.random())*360)
  s3 = new Snow((Math.random())*800, -30, 40, 40,(Math.random())*360)
  s4 = new Snow((Math.random())*800, -50, 40, 40,(Math.random())*360)
  s5 = new Snow((Math.random())*800, -70, 40, 40,(Math.random())*360)
  s6 = new Snow((Math.random())*800, -100, 40, 40,(Math.random())*360)
  s7 = new Snow((Math.random())*800, -125, 40, 40,(Math.random())*360)
  s8 = new Snow((Math.random())*800, -150, 40, 40,(Math.random())*360)
  s9 = new Snow((Math.random())*800, -180, 40, 40,(Math.random())*360)
  s10 = new Snow((Math.random())*800, -200, 40, 40,(Math.random())*360)
}



function draw() {
  background(bg);
  Engine.update(engine);
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  s6.display();
  s7.display();
  s8.display();
  s9.display();
  s10.display();
  console.log(s1.body.position.y)  
}