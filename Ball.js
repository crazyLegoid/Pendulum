class Ball{
   constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, width, options);
        this.width = width;
        this.height = height
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        this.body.debug = true;
        push();
        strokeWeight(10);
        stroke("grey");
        ellipse(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      } 

     
}