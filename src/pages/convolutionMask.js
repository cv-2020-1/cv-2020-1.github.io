import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/app.css"
import React from "react"
import loadable from "@loadable/component"

let y = 0
let direction = "^"
export default (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(500, 500).parent(canvasParentRef)
  }

  const draw = (p5) => {
    p5.background(0)
    p5.fill(255, y * 1.3, 0)
    p5.ellipse(p5.width / 2, y, 50)
    if (y > p5.height) direction = ""
    if (y < 0) {
      direction = "^"
    }
    if (direction === "^") y += 8
    else y -= 4
  }
  if (typeof window !== "undefined") {
    const Sketch = loadable(() => import("react-p5"))
    return (
      <div className="jumbotron m-4 bg-gradient-orange">
        <h1 className="display-4">Escala de Grises</h1>
        <p className="lead">lorem ipsum</p>
        <hr className="my-4"></hr>
        <p>lorem ipsum</p>
        <a className="btn btn-lg btn-dark" href="#" role="button">
          Convolución
        </a>
        <Sketch setup={setup} draw={draw} />
      </div>
    )
  } else {
    //     // if window does not exist
    return null
  }
}
