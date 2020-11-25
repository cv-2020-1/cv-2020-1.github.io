import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import loadable from "@loadable/component"

export default (props) => {
  
    if (typeof window !== "undefined") {
      return (
        <div className="ml-5 mr-5 my-3">
          <h1>TALLER DE ILUMINACIÓN</h1>
          <hr className="my-3"></hr>
          <p>Este es nuestro ejemplo de luz ambiental</p>
          <iframe src="https://cv-2020-1.github.io/Shaders/p5js-ambientlight/" frameborder="0"></iframe>
        </div>
      )
    } else
      return null
  }
  