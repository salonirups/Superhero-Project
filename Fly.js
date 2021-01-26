class Fly{
    constructor(bodyA,pointB){
     var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:17
     }
     this.Fly=Constraint.create(options)
    World.add(world,this.Fly);
    this.pointB=pointB
    }
    display(){
    var pointA=this.Fly.bodyA.position;
    var pointB=this.pointB;
    strokeWeight(0);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
    }