import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import loadable from "@loadable/component";

export default function TessellationCross() {
	var angle = 90;
	var speed = 0.9;
	var turningSense = true;
	var backgroundColor = 255;
	function setup(p5, canvasParentRef) {
		p5.createCanvas(400, 400).parent(canvasParentRef);
		// Change grips of rect
		p5.rectMode(p5.CENTER);
		p5.angleMode(p5.DEGREES);
	}

	function draw(p5) {
		// y1 starts with a value of 0, and increases by 5 for each line
		// x1 starts with a value of 50, and increases by 5 for each line

		p5.background(backgroundColor);

		for (var j = -5; j < 6; j++) {
			if (turningSense) {
				// Black crosses
				for (var i = -2; i < 7; i++) {
					p5.fill("black");
					p5.noStroke();

					p5.push();
					p5.translate(i * 25 + j * 75, i * 75 - j * 25);
					p5.rotate(angle);
					p5.rect(0, 0, 75, 25);
					p5.rect(0, 0, 25, 75);
					p5.pop();
				}
			} else {
				// White crosses
				for (var i = -2; i < 7; i++) {
					p5.fill("white");
					p5.noStroke();

					p5.push();
					p5.translate(50 + i * 25 + j * 75, 25 + i * 75 - j * 25);
					p5.rotate(angle);
					p5.rect(0, 0, 75, 25);
					p5.rect(0, 0, 25, 75);
					p5.pop();
				}
			}
		}

		angle = angle - speed;

		if (angle >= 90 || angle <= 0) {
			speed *= -1;
			turningSense = !turningSense;

			if (backgroundColor == 0) {
				backgroundColor = 255;
			} else {
				backgroundColor = 0;
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
