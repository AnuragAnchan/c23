class box{
    constructor(x,y,width,height){
        //properties 
        var options = {
            restitution:1.0
            }
    this.boxbody=Bodies.rectangle(x,y,width,height,options);
    World.add(MyWorld,this.boxbody);
    this.width=width;
    this.height=height;
    }
//functions
  display(){

    var pos=this.boxbody.position;
    var angle=this.boxbody.angle;
    push();
    translate(pos.x,pos.y);
    angleMode(RADIANS);
    rotate (angle);
      rectMode(CENTER);
      fill(255);
      rect(0,0,this.width,this.height);
      pop ();
  }
}