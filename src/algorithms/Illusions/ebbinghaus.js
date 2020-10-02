
import React from "react";
import loadable from "@loadable/component"


export default function Ebbinghaus() {

    function setup(p5, canvasParentRef) {
        p5.createCanvas(600, 400).parent(canvasParentRef);
    }
      
    function draw(p5) {
        p5.background(220);
        let k = p5.map(p5.mouseX, 0, p5.width, 200, 0)
    
        p5.noStroke()
        p5.fill('yellow')
        p5.ellipse(160, 200, 50, 50)
    
        p5.fill(155, 0, 215, k)
    
        p5.ellipse(110, 120, 90, 90)
        p5.ellipse(210, 120, 90, 90)
    
        p5.ellipse(110, 280, 90, 90)
        p5.ellipse(210, 280, 90, 90)
    
        p5.ellipse(60, 200, 90, 90)
        p5.ellipse(260, 200, 90, 90)
    
        p5.fill('yellow')
        p5.ellipse(450, 200, 50, 50)
    
        p5.fill(155, 0, 215, k)
    
        p5.ellipse(450, 154, 25, 25)
        p5.ellipse(450, 246, 25, 25)
    
        p5.ellipse(400, 200, 25, 25)
        p5.ellipse(500, 200, 25, 25)
    
        p5.ellipse(415, 235, 25, 25)
        p5.ellipse(485, 235, 25, 25)
    
        p5.ellipse(415, 164, 25, 25)
        p5.ellipse(485, 164, 25, 25)
    }

    if (typeof window !== "undefined") {
        const Sketch = loadable(() => import("react-p5"))
        return <Sketch className="d-flex justify-content-center" setup={setup} draw={draw} />;
    }
    else {
       return null
    }
}
