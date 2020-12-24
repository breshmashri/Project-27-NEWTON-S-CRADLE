class Roof {
    constructor(x,y,w,h) {
	  var options = {
		isStatic:true			
	}
	  this.w = w;
	  this.h = h;
	  this.body = Bodies.rectangle(x, y, w, h, options);
 	  World.add(world, this.body);

	}
	display() {
	  var groundPos = this.body.position;
	  rectMode(CENTER);
	  rect(groundPos.x, groundPos.y, this.w, this.h);
	}		
}	