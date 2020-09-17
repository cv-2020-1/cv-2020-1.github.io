import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/app.css"
import React from "react"
import loadable from "@loadable/component"

//import nieve from "../assets/nieve.jpg"

let y = 0
let direction = "^"
export default (props) => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef)
  }

  const draw = (p5) => {
    p5.background(0)
    //p5.image(nieve,0,0)
  }

  
  if (typeof window !== "undefined") {
    const Sketch = loadable(() => import("react-p5"))
    return (
      <div className="jumbotron m-4 bg-gradient-orange">
        <h1 className="display-4">Escala de Grises</h1>
        <p className="lead">lorem ipsum</p>
        <hr className="my-4"></hr>
        <p>lorem ipsum</p>
        <Sketch setup={setup} draw={draw} />
      </div>
    )
  } else {
    //     // if window does not exist
    return null
  }
}
