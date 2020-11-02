import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import loadable from "@loadable/component";

export default function Mixer() {
    var bugs = [];
    var speed = 10;
    
    const setup = (p5, canvasParentRef) => {
      p5.createCanvas(720, 400).parent(canvasParentRef);
      p5.rectMode(p5.CENTER);
      p5.angleMode(p5.DEGREES);
      
      for(var j = 0;j < 20; ++j){
        for(var i = 0; i < 20; ++i){
          var cr = new cross();
          cr.move(i*50, j*15);
          bugs.push(cr);      
        }    
      }
    }
    
    const draw = (p5) => {
      p5.background(0);
      for(var i = 0; i < bugs.length; ++i){
        bugs[i].display(p5);
      }
    }
    
    function keyPressed(p5) {        
        if(p5.keyCode === p5.LEFT_ARROW)
            speed += 10;
        else if(p5.keyCode === p5.RIGHT_ARROW)
            speed -= 10;
    }
    // clase cross
    class cross {
    
      constructor() {
        this.width = 50;
        this.height = 15;
        this.angle = 0;
        this.x = 0;
        this.y = 0;    
      }
    
      move(dx, dy) {
        this.x += dx;
        this.y += dy;
      }
    
      display(p5) {
        if(p5.mouseIsPressed){          
          this.angle += speed;
        }else
          this.angle = 0;
        p5.push();
        p5.fill(100);    
        p5.translate(this.x*1.5, this.y*0.9);        
        p5.rotate(this.angle);
        p5.rect(0,0, this.width, this.height);
        p5.rect(0,0, this.height, this.width);           
        p5.pop();
      }
    
    }

	if (typeof window !== "undefined") {
		const Sketch = loadable(() => import("react-p5"));
		return (
			<Sketch
				className="d-flex justify-content-center"
				setup={setup}
                draw={draw}
                keyPressed={keyPressed}
			/>
		);
	} else {
		return null;
	}
}
