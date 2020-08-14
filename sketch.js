const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var suitcase,suitcase2,rope,rope2,ground;
function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(displayWidth-100,displayHeight-300);

  suitcase = new Suitcases(300,400,150,50);
  ground = new Ground(width/2,height-100,width,10);
  rope = new Rope({x:width/2,y:20},suitcase.body);

}

function draw() {
  background(225);  
  Engine.update(engine);

  suitcase.display();
  ground.display();
  rope.display();
//console.log(suitcase.body);
console.log(ground.body.position.y-suitcase.body.position.y);
console.log(ground.height/2+suitcase.height/2);
/*
  if(ground.body.position.y-suitcase.body.position.y === ground.height/2+suitcase.height/2){
      suicase2 = new Suitcases(width/2,height-100,width,10);
      suitcase2.display();
      rope2 = new Rope({x:width/2,y:20},suitcase2.body);
      rope2.display();
      console.log(suitcase2);
      console.log(rope2);
      //rope2.band.bodyB != null;
    }
*/

/*if(suitcase.body.velocity.y<0.5){
  suitcase2 = new Suitcases(300,400,150,50);
  suitcase2.display();
  rope.attach(suitcase2.body);

}*/
}

function mouseClicked(){
  rope.band.bodyB =null;
}