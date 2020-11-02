
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import loadable from "@loadable/component";
import imagen from "../../assets/lines.png";
import imagen2 from "../../assets/lines2.png";


export default function Cubik() {

  
  let img;
  let img2;
  let cam;
  let delta = 0.5;

  function preload(p5) {
    img = p5.loadImage(imagen);
    img2 = p5.loadImage(imagen2);
  }
  
  function setup(p5, canvasParentRef) {
    p5.createCanvas(400, 400, p5.WEBGL).parent(canvasParentRef);;
  
    cam = p5.createCamera();
  }
  
  function draw(p5) {
    p5.background(0);
  
    p5.texture(img2);
  
    if (p5.mouseIsPressed) {
      p5.push();
      cam.move(0, delta, 0);

      if (p5.frameCount % 100 === 0) {
        delta *= -1;
      }

      p5.rotateX(p5.millis() / 1000);
      p5.box(800, 800, 800);  
      p5.pop();
    
      p5.push();
      p5.rotateX(p5.millis() / 1000);
      p5.texture(img);
      p5.box(150, 150, 150);
      p5.pop();
    } 
    else {
      p5.push();
  
      cam.move(0, delta, 0);
      if (p5.frameCount % 100 === 0) {
        delta *= -1;
      }
  
      p5.box(970, 1050, 900);
      p5.pop();
    
      p5.push();
      p5.texture(img);
      p5.box(150, 150, 150);
      p5.pop();
    }
  }

  if (typeof window !== "undefined") {
    const Sketch = loadable(() => import("react-p5"));
    return <Sketch className="d-flex justify-content-center" setup={setup} draw={draw} preload={preload} />;
  } 
  else {
    return null;
  }
}


