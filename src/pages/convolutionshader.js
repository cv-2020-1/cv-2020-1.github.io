import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import loadable from "@loadable/component"

import fuego from "../assets/fuego.jpg";
//import vertexshader from '../shaders/convolution/vertex.vert';
//import fragmentshader from '../shaders/convolution/fragment2.frag';

let img;
let convolutionShader;
export default (props) => {
  const preload = (p5) => {
    img = p5.loadImage(fuego);
    convolutionShader = p5.loadShader('../shaders/basic/basic.vert', '../shaders/basic/basic.frag');
  }

  const setup = (p5, canvasParentRef) => {       
    p5.createCanvas(p5.windowWidth, 500*2, p5.WEBGL)        
  }

  const draw = (p5) => {
    p5.shader(convolutionShader);
    p5.rect(0,0,p5.width, p5.height);
  }

  if (typeof window !== "undefined") {
    const Sketch = loadable(() => import("react-p5"))
    return (
      <div className="ml-5 mr-5 my-3">
        <h1>MASCARAS DE CONVOLUCIÓN SHADERS</h1>
        <hr className="my-3"></hr>
        <p className="mb-2">
            Test          
        </p>
        <Sketch setup={setup} draw={draw} preload={preload}/>
      </div>
    )
  } else
    return null
}
