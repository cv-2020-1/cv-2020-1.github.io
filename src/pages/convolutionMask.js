import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import loadable from "@loadable/component"

import convolution from '../algorithms/convolution/convolution';
import {BoxBlurKernel, GaussianBlurKernel, SharpenKernel, EdgeDetectionKernel} from '../algorithms/convolution/kernels'

import Code from '../components/Code/Code';
import convCode from '../components/Code/convolution/convolutionCode';
import convCode2 from '../components/Code/convolution/convolutionCode2';
import fragshaderedge from '../components/Code/convolution/fragshaderedge';
import fragshadersharp from '../components/Code/convolution/fragshadersharpen';
import fuego from "../assets/fuego.jpg";
import blurimage from '../assets/convolution-images/boxblur.png';
import edgeimage from '../assets/convolution-images/edgedetection.png';
import sharpenimage from '../assets/convolution-images/sharpen.png';
import edgeshader from '../assets/convolution-images/shader-edge.png';
import sharpenshader from '../assets/convolution-images/shader-sharpen.png';

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
      <div className="ml-5 mr-5 my-3">
        <h1>MASCARAS DE CONVOLUCIÓN</h1>
        <hr className="my-3"></hr>
        <p className="mb-4 text-justify" style={{fontSize:'20px', width:'60%'}}>En esta sección implementamos las mascaras de convolución para una imagen aplicando 3 tipos de kernels 
          <strong>la imagen #1 (esquina superior izquierda)</strong> es la imagen original, la <strong>imagen #2 (esquina superior derecha)</strong> es la imagen con el kernel de detección de bordes,
          <strong>la imagen #3 (esquina inferior izquierda)</strong> es la imagen con un kernel BoxBlur, y la <strong>imagen #4 (esquina inferior derecha)</strong> es la imagen con el kernel Sharpen.
        </p>
        <Sketch setup={setup} draw={draw} preload={preload}/>
        <br></br>
        <h2>CODIGO</h2>
        <Code code={convCode}></Code>
        <Code code={convCode2}></Code>
        <br></br>
        <h2>KERNEL BOX BLUR</h2>
        <p className="text-justify" style={{fontSize:'20px', width:'60%'}}>
          Un Box Blur es un filtro lineal en el que cada pixel resulta del promedio de sus vecinos tomando un kernel de 3x3          
        </p>
        <img src={blurimage} alt="boxblur"/>
        <br></br>
        <h2>KERNEL EDGE DETECTION</h2>
        <p className="text-justify" style={{fontSize:'20px', width:'60%'}}>
          Edge Detection es una técnica de procesamiento de imágenes para encontrar los puntos de cambio drastico del brillo en una imagen
        </p>
        <img src={edgeimage} alt="edgeimage"/>
        <br></br>
        <h2>KERNEL SHARPEN</h2>
        <p className="text-justify" style={{fontSize:'20px', width:'60%'}}>
          Sharpen es un efecto que se aplica a las imágenes para darles una apariencia más nítida.
        </p>
        <img src={sharpenimage} alt="sharpen"/>
        <br></br>
        <h1>CONVOLUCIÓN POR HARDWARE con SHADERS</h1>
        <p className="text-justify" style={{fontSize:'20px', width:'60%'}}>
          Debido a dificultades en la implementación de shaders con p5 decidimos utilizar Processing para estos aplicandolo a 2 tipos de kernels: Edge Detection y Sharpen
        </p>
        <img src={edgeshader} alt="edge"/><img src={sharpenshader} alt="sharpen"/>
        <br></br>
        <Code code={fragshadersharp}></Code>
        <Code code={fragshaderedge}></Code>
        <br></br>
        <h2>CONCLUSIONES</h2>
        <ul className="mb-5">
          <li>1) Aunque apliquemos kernels habran algunas imagenes cuya imagen resultante sea dificil diferenciar de la original a simple vista</li>
          <li>2) Con Variar solo uno de los numeros del kernel se pueden obtener resultados muy distintos</li>
          <li>3) Si aplicamos cualquiera de los filtros desde processing o p5 usando Shaders la velocidad con que renderizo la imagen o inclusive un video es muy superior</li>
        </ul>
        <br></br>
        <h2>REFERENCIAS</h2>
        <a href="https://github.com/VisualComputing/FragmentShaders/tree/gh-pages/sketches/desktop">Creditos a: https://github.com/VisualComputing/FragmentShaders/tree/gh-pages/sketches/desktop</a><br></br>
        <a href="https://en.wikipedia.org/wiki/Kernel_(image_processing)">https://en.wikipedia.org/wiki/Kernel_(image_processing)</a><br></br>
        <a href="https://www.slrlounge.com/glossary/image-sharpening-definition/">https://www.slrlounge.com/glossary/image-sharpening-definition/</a>
        <br></br><br></br><br></br>
      </div>
    )
  } else
    return null
}
