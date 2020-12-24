class Bob {
    constructor(x, y, r) {
	var options = {
	  restitution:1,
	  friction:0.3,
	  density:0.8
    }
	  this.x = x;
	  this.y = y;
	  this.r = r;
	  this.body = Bodies.circle(this.x, this.y, this.r/2, options);
	  World.add(world, this.body);
    }
	display() {
		var bobpos = this.body.position;
		ellipse(bobpos.x, bobpos.y, this.r);
	}		
}