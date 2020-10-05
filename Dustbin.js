class Dustbin {
    constructor(x, y,width,height) {
      var options = {
        isStatic: true
      }
      this.body = Bodies.rectangle(x, y,width,height,options);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = 0;
     this.image = loadImage("sprites/dustbingreen.png")

      Matter.Body.setAngle(this.body,this.angle);
      
      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("white");
      fill(255);
      image(this.image, 0,0, this.width, this.height);
      pop();
    }
  }
