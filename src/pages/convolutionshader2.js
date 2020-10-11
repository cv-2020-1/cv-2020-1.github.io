import "bootstrap/dist/css/bootstrap.min.css";
import React from "react"
import p5 from "p5"
import fuego from "../assets/fuego.jpg";


let img;
let shader;

const page = (props) => {

    const sketch = (p) => {

        p.preload = () => {
            shader = p.loadShader('../shaders/convolution/vertex.vert', '../shaders/convolution/fragment.frag');
            img = p.loadImage(fuego);
        }
        
        p.setup = () => {
            let canvas = p.createCanvas(500, 300, p.WEBGL);
            p.noStroke();
        }
        
        p.draw = () => {
            p.shader(shader);
            shader.setUniform('tex0', img);
            shader.setUniform('stepSize', [1.0 / 500, 1.0 / 300]);
            shader.setUniform('dist', 3.0);
            p.rect(0,0,200, 200);
        }    
    }
  if (typeof window !== "undefined") {
    const p5canvas = new p5(sketch,"p5")
    return (
      <div className="ml-5 mr-5 my-3">         
        <h1>MASCARAS DE CONVOLUCIÓN SHADERS</h1>
        <img src={fuego} id="img" width="300px"></img>
        <div id="p5">
        </div>                
      </div>
    )
  } else
    return null
}


export default page;