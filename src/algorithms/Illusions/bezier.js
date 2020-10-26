import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import loadable from "@loadable/component";

export default function Bezier() {
	var y1 = 0;
	var x2 = 5;

	function setup(p5, canvasParentRef) {
		p5.createCanvas(400, 400).parent(canvasParentRef);
		p5.background(220);
	}

	function draw(p5) {

		//line(0, y1,  x2, 400);
		// y1 starts with a value of 0, and increases by 50 for each line
		// x1 starts with a value of 50, and increases by 50 for each line
		p5.line(0, y1, x2, 400);

		y1 = y1 + 5;
		x2 = x2 + 5;
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
