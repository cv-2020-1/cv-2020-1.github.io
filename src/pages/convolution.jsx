import * as p5 from "p5"
import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import asset from "../../static/android-chrome-512x512.png"

class test extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  Sketch = (p) => {
    let img
    p.setup = () => {
      p.createCanvas(720, 400)
      img = p.loadImage(asset) // Cargar la imagen
    }

    p.draw = () => {
      p.background(220)
      // Muestra la imagen en su tamaño original en la posición (0,0)
      p.image(img, 0, 0)
      // Muestra la imagen en la posición (0, height/2) a la mitad del tamaño
      p.image(img, 0, 350, 350, 300)
      p.ellipse(50, 50, 80, 80)
    }
  }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  render() {
    return (
      <div className="jumbotron m-4 bg-gradient-orange">
        <h1 className="display-4">Convoluciones con P5</h1>
        <div ref={this.myRef}>
          <h1>Hello World p5 </h1>
        </div>
      </div>
    )
  }
}

export default test
