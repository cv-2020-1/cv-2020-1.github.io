import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/app.css";
import React from "react";
import loadable from "@loadable/component";
// Asset to convert
import asset from "../../assets/fuego.jpg";

import editPixelsGray from "./editPixelsGray";

export default function grayScale(props) {
	let img = null;
	let canvas = null;

	const preload = (p5) => {
		img = p5.loadImage(asset); // Cargar la imagen
	};
	const setup = (p5, canvasParentRef) => {
		canvas = p5.createCanvas(800, 500);
		canvas.parent(canvasParentRef);
		p5.image(
			editPixelsGray(p5, img, props.technique),
			0,
			0,
			p5.width,
			p5.height
		);
	};

	const draw = (p5) => {
		// p5.background(0);
	};
	if (typeof window !== "undefined") {
		const Sketch = loadable(() => import("react-p5"));
		return <Sketch setup={setup} draw={draw} preload={preload} />;
	} else {
		//if window does not exist
		return null;
	}
}
