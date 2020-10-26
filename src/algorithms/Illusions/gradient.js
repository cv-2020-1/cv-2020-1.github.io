import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import loadable from "@loadable/component";

export default function Gradient() {
	let b1, b2, d;

	function setup(p5, canvasParentRef) {
		p5.createCanvas(720, 400).parent(canvasParentRef);

		// Definir colores
		b1 = p5.color(220);
		b2 = p5.color(30);
		d = p5.color(125);
	}

	function draw(p5) {
		// Fondo
		for (let i = 0; i <= p5.width; i++) {
			let inter = p5.map(i, 0, p5.width, 0, 1);
			let c = p5.lerpColor(b2, b1, inter);
			p5.stroke(c);
			p5.line(i, 0, i, p5.height);
		}

		if(p5.mouseIsPressed){
			p5.background(80);
		}

		p5.stroke(d);
		p5.rect(110, 150, 500, 100);
		p5.fill(d);
	}

	if (typeof window !== "undefined") {
		const Sketch = loadable(() => import("react-p5"));
		return (
			<Sketch
				className="d-flex justify-content-center"
				setup={setup}
				draw={draw}
			/>
		);
	} else {
		return null;
	}
}
