import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import loadable from "@loadable/component";

export default function Poggendorff() {

	let d;

	function setup(p5, canvasParentRef) {
		p5.createCanvas(400, 400).parent(canvasParentRef);
		d = p5.color(125);
	}

	function draw(p5) {
		p5.background(255);

		p5.strokeWeight(4);
		p5.stroke("red");
		p5.line(100, 20, 200, 200);
		
		p5.strokeWeight(4);
		p5.stroke("green");
		p5.line(200, 200, 300, 380);
		
		p5.strokeWeight(4);
		p5.stroke("blue");
		p5.line(220, 200, 320, 380);

		if(!p5.mouseIsPressed){
			p5.fill(d);
			p5.stroke(d);
			p5.rect(160, 20, 80, 360);
		}

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
