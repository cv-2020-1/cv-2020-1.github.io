
import React from "react";
import loadable from "@loadable/component"


export default function Grid () {

    function setup(p5, canvasParentRef) {
        p5.createCanvas(400, 400).parent(canvasParentRef);
        p5.strokeWeight(3);        // medium weight lines
        p5.smooth();               // antialias lines
        p5.stroke(100, 100, 100);  // dark grey colour for lines
        p5.noLoop();
    
    }
    
    function draw(p5) {
        p5.background(0);          // black background
        var step = 25;          // grid spacing
    
        //vertical lines
        for (var x = step; x < p5.width; x = x + step) {
            p5.line(x, 0, x, p5.height);
        }
    
        //horizontal lines
        for (var y = step; y < p5.height; y = y + step) {
            p5.line(0, y, p5.width, y);
        }
    
        // Circles
        p5.ellipseMode(p5.CENTER);
        p5.stroke(255, 255, 255);  // white circles
        for (var i = step; i < p5.width -5; i = i + step) {
            for (var j = step; j < p5.height -15; j = j + step) {
                p5.strokeWeight(6);
                p5.point(i, j);
                p5.strokeWeight(3);
            }
        }
    }
    
    if (typeof window !== "undefined") {
      const Sketch = loadable(() => import("react-p5"))
      return <Sketch className="d-flex justify-content-center" setup={setup} draw={draw} />;
    }
    else {
      return null
    }
};