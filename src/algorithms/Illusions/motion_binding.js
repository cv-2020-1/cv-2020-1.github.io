import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import loadable from "@loadable/component";

export default function Motion_Binding() {
	let x1, x2, y1, y2;
	let lenght, pdist;
	let xSpeed1, xSpeed2;
	let margin;

	function setup(p5, canvasParentRef) {
		p5.createCanvas(700, 500).parent(canvasParentRef);
		x1 = 250;
		y1 = 260;
		x2 = 215;
		y2 = 225;
		lenght = 100;
		pdist = 150;
		xSpeed1 = 2;
		xSpeed2 = 2;
		margin = 5;
		p5.rectMode(p5.CENTER);
	}

	function draw(p5) {
		p5.background(125);

		p5.strokeWeight(6);
		p5.stroke("blue");
		p5.line(
			x1 + margin,
			y1 + margin,
			x1 + lenght - margin,
			y1 + lenght - margin
		);
		p5.line(
			x1 + pdist + margin,
			y1 - pdist + margin,
			x1 + pdist + lenght - margin,
			y1 - pdist + lenght - margin
		);
		p5.line(
			x2 + margin,
			y2 - margin,
			x2 + lenght - margin,
			y2 - lenght + margin
		);
		p5.line(
			x2 + pdist + margin,
			y2 + pdist - margin,
			x2 + pdist + lenght - margin,
			y2 + pdist - lenght + margin
		);

		if (p5.mouseIsPressed) {
			p5.push();
			p5.translate(p5.width / 4 + 30, p5.height / 2 + 10);
			p5.rotate(p5.PI / 4);
			p5.stroke("red");
			p5.fill("red");
			p5.rect(0, 0, 90, 90);
			p5.pop();

			p5.push();
			p5.translate((p5.width / 4) * 3 - 30, p5.height / 2 + 10);
			p5.rotate(p5.PI / 4);
			p5.stroke("red");
			p5.fill("red");
			p5.rect(0, 0, 100, 100);
			p5.pop();

			p5.push();
			p5.translate(p5.width / 2, p5.height / 4 - 10);
			p5.rotate(p5.PI / 4);
			p5.stroke("red");
			p5.fill("red");
			p5.rect(0, 0, 100, 100);
			p5.pop();

			p5.push();
			p5.translate(p5.width / 2, (p5.height / 4) * 3 + 30);
			p5.rotate(p5.PI / 4);
			p5.stroke("red");
			p5.fill("red");
			p5.rect(0, 0, 100, 100);
			p5.pop();
		}

		x1 += xSpeed1;
		y1 -= xSpeed1;
		x2 += xSpeed2;
		y2 += xSpeed2;
		if (x1 > p5.width / 2 - lenght || x1 < p5.width / 2 - (50 + lenght)) {
			xSpeed1 *= -1;
		}
		if (x2 > p5.width / 2 - lenght || x2 < p5.width / 2 - (50 + lenght)) {
			xSpeed2 *= -1;
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
