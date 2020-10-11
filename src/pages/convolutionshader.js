import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import loadable from "@loadable/component"

import fuego from "../assets/fuego.jpg";
//import vertexshader from '../shaders/convolution/vertex.vert';
//import fragmentshader from '../shaders/convolution/fragment.frag';

let img;
let shader;
let shaderConvolution;
export default (props) => {
  const preload = (p5) => {    
    shader = p5.loadShader('../shaders/convolution/vertex.vert', '../shaders/convolution/fragment.frag');
    img = p5.loadImage(fuego);
  }

  const setup = (p5, canvasParentRef) => {       
    shaderConvolution = p5.createCanvas(500, 300, p5.WEBGL);
    shaderConvolution.parent(canvasParentRef)
    p5.noStroke();
  }

  const draw = (p5) => {
    p5.shader(shader);
    shader.setUniform('tex0', img);
    shader.setUniform('stepSize', [1.0 / 500, 1.0 / 300]);
    shader.setUniform('dist', 3.0);
    p5.rect(0,0,200, 200);
  }

  if (typeof window !== "undefined") {
    const Sketch = loadable(() => import("react-p5"))
    return (
      <div className="ml-5 mr-5 my-3">
        <h1>MASCARAS DE CONVOLUCIÓN SHADERS</h1>
        <Sketch setup={setup} draw={draw} preload={preload}/>
      </div>
    )
  } else
    return null
}
