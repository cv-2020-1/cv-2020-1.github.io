import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import loadable from "@loadable/component"


export default (props) => {

  const setup = (p5, canvasParentRef) => {       
    p5.createCanvas(500, 300).parent(canvasParentRef);    
    p5.noStroke();
  }

  const draw = (p5) => {
    p5.rect(0,0,200, 200);
  }

  if (typeof window !== "undefined") {
    const Sketch = loadable(() => import("react-p5"))
    return (
      <div className="ml-5 mr-5 my-3">
        <h1>MASCARAS DE CONVOLUCIÓN SHADERS</h1>
        <Sketch setup={setup} draw={draw}/>
        <p>Utilizando un iframe</p>
        <iframe src="https://cv-2020-1.github.io/Shaders/pages/convolution.html" style={{overflow:'hidden'}}></iframe>
      </div>
    )
  } else
    return null
}
