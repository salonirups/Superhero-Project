const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var hero;
var ground;
var base;
var fly;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;

function preload() {
//preload the images here
backgroundImg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(1500, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(750,795,3000,10);
  base = new Ground(325,470,650,10);
  hero = new Hero(300,400,200);
  fly = new Fly(hero.body,{x:300,y:300});
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

ground.display();
hero.display();
fly.display();
base.display()
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();


}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}