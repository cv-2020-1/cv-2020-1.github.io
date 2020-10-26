import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import loadable from "@loadable/component";

export default function Squares() {
	let angle, xSpeed;

	function setup(p5, canvasParentRef) {
		p5.createCanvas(400, 400).parent(canvasParentRef);
		angle = 0.0;
		xSpeed = 6;
		p5.rectMode(p5.CENTER);
	}

	function draw(p5) {
		p5.background(255);
		
		p5.push();
		p5.translate(p5.width/2, p5.height/2);
		p5.rotate(p5.PI/360*angle);
		p5.stroke("blue");
		p5.fill("blue");
		p5.rect(0, 0, 250, 250);
		p5.pop();

		if (!p5.mouseIsPressed) {
			p5.push();
			p5.translate(83, 83);
			p5.stroke("orange");
			p5.fill("orange");
			p5.rect(0, 0, 195, 195);
			p5.pop();

			p5.push();
			p5.translate(317, 83);
			p5.stroke("orange");
			p5.fill("orange");
			p5.rect(0, 0, 195, 195);
			p5.pop();

			p5.push();
			p5.translate(83, 317);
			p5.stroke("orange");
			p5.fill("orange");
			p5.rect(0, 0, 195, 195);
			p5.pop();

			p5.push();
			p5.translate(317, 317);
			p5.stroke("orange");
			p5.fill("orange");
			p5.rect(0, 0, 195, 195);
			p5.pop();
		}

		angle += xSpeed;
		if (angle > 360 || angle < 0) {
			angle = 0;
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
