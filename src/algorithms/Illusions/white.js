import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import loadable from "@loadable/component";

export default function White() {

	let d;

	function setup(p5, canvasParentRef) {
		p5.createCanvas(400, 400).parent(canvasParentRef);
		d = p5.color(125);
	}

	function draw(p5) {
		p5.background(255);

		p5.stroke(d);
		p5.fill(d);
		p5.rect(100, 0, 50, p5.height);

		if(!p5.mouseIsPressed){
			let len = 12;
			for (let i = 0; i < p5.height / len; i++) {
				if (i % 2 == 0) {
					p5.fill("black");
					p5.rect(0, i * len, p5.width, len);
				}
			}
		}
		
		p5.stroke(d);
		p5.fill(d);
		p5.rect(250, 0, 50, p5.height);

		if(!p5.mouseIsPressed){
			let len = 12;
			for (let i = 0; i < p5.height / len; i++) {
				if (i % 2 == 1) {
					p5.fill("white");
					p5.stroke("white");
					p5.rect(p5.width / 2, i * len + 1, p5.width / 2, len - 2);
				}
			}
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
