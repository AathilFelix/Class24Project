class Ground {
  constructor(x, y, width, height) {
    var options ={
      isStatic : true
    }
    this.body = Bodies.rectangle(x,y,options);
    this.width = width;
    this.height = height;
    world.add(world,this.body);
  };

  display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("blue");
    rect(pos.x,pos.y,this.width,this.height);
  }
}
