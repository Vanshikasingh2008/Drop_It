class Suitcases{
    constructor(x,y,width,height){
        var op={
            isStatic:false,
            frictionAir:0,
            mass:4
        }
        this.body = Bodies.rectangle(x,y,width,height,op);
        this.width = width;
        this.height = height;
        this.image = loadImage("blueSuitcase.jpg");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        angleMode(DEGREES);
        rotate(this.body.angle);
        //rectMode(CENTER);
        imageMode(CENTER);
        //fill("blue");
        //rect(0,0,this.width,this.height);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}