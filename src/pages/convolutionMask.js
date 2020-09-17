import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/app.css"
import React from "react"
import loadable from "@loadable/component"

import convolution from '../algorithms/convolution/convolution';
import {BoxBlurKernel, GaussianBlurKernel, SharpenKernel, EdgeDetectionKernel} from '../algorithms/convolution/kernels'

import fuego from "../assets/fuego.jpg";

let img, canvas;
export default (props) => {
  const preload = (p5) => {
    img = p5.loadImage(fuego);      
  }

  const setup = (p5, canvasParentRef) => {       
    canvas = p5.createCanvas(800, 500)
    canvas.parent(canvasParentRef)    
    p5.resizeCanvas(canvasParentRef.clientWidth, 500*2/*canvasParentRef.clientWidth*0.625*/, false);
    p5.noLoop();
  }

  const draw = (p5) => {
    p5.background(0)
    img.loadPixels();
    p5.image(img,0,0, p5.width/2, p5.height/2)
    p5.image(convolution(p5, img, EdgeDetectionKernel),p5.width/2,0, p5.width/2, p5.height/2);
    p5.image(convolution(p5, img, BoxBlurKernel),0,p5.height/2, p5.width/2, p5.height/2);
    p5.image(convolution(p5, img, SharpenKernel),p5.width/2,p5.height/2, p5.width/2, p5.height/2);  
  }

  





  if (typeof window !== "undefined") {
    const Sketch = loadable(() => import("react-p5"))
    return (
      <div className="jumbotron m-4 bg-gradient-orange">
        <h1>MASCARAS DE CONVOLUCIÓN</h1>
        <hr className="my-4"></hr>
        <p>En esta sección implementamos las mascaras de convolución para una imagen aplicando otros 3 tipos de kernels
          la imagen #1 (esquina superior izquierda) es la imagen original, la imagen #2 (esquina superior derecha) es la imagen con el kernel de detección de bordes,
          la imagen #3 (esquina inferior izquierda) es la imagen con un kernel BoxBlur, y la imagen #4 (esquina inferior derecha) es la imagen con el kernel Sharpen.
        </p>
        <Sketch setup={setup} draw={draw} preload={preload}/>
      </div>
    )
  } else
    return null
}
