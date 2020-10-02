import React from "react";
import loadable from "@loadable/component";

export default function CafeWall() {
	let anchoLineaY = 2;
	let anchoLineaX = 1;
	let alturaCelda = 26;
	let anchoCelda = 30;
	let filas = 9;

	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(400,(alturaCelda + anchoLineaY) * filas + anchoLineaY).parent(canvasParentRef);
		p5.smooth();
	};

	const draw = (p5) => {
		p5.background("#888");
		for (var i = 0; i < filas; i++) {
			var yPos = i * (alturaCelda + anchoLineaY) + anchoLineaY;
			var numCells = Math.ceil(400 / anchoCelda) + 3;

			for (var j = -80; j < numCells; j++) {
				if (j % 2 === 0) 
					p5.fill(0);
				else 
					p5.fill("#fff");

				p5.noStroke();
				var pos = i % 4;
				if (pos === 3) 
					pos = 1;
				p5.rect(j * (anchoCelda + anchoLineaX) - (((pos * p5.mouseX) / 15) % (2 * anchoCelda)) + 15,yPos,anchoCelda,alturaCelda);
			}
		}
	};

	if (typeof window !== "undefined") {
		const Sketch = loadable(() => import("react-p5"));
		return <Sketch setup={setup} draw={draw} />;
	} else {
		return null;
	}
}
