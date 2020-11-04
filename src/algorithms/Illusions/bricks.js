import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import loadable from "@loadable/component";

export default function Bricks() {
	let brick1;
	let brick2;
	let xPos;
	let xSpeed;

	function setup(p5, canvasParentRef) {
		p5.createCanvas(450, 400).parent(canvasParentRef);
		xPos = 0;
		xSpeed = 1;
	}

	function draw(p5) {
		p5.background(255);
		if (p5.mouseIsPressed) {
			p5.background(100);
		}

		xPos += xSpeed;
		if (xPos + 100 >= p5.width || xPos <= 0) {
			xSpeed *= -1;
		}

		if (!p5.mouseIsPressed) {
			let len = 12;
			for (let i = 0; i < p5.width / len; i++) {
				if (i % 2 == 0) {
					let bar = p5.rect(i * len, p5.height, len, -p5.height);
					bar.fill("black");
				}
			}
		}
		brick1 = p5.rect(xPos, 100, 100, 50);
		brick1.fill("white");
		brick1.stroke("white");
		brick1.xSpeed = xSpeed;

		brick2 = p5.rect(xPos, 250, 100, 50);
		brick2.fill("black");
		brick2.stroke("black");
		brick2.xSpeed = xSpeed;
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
