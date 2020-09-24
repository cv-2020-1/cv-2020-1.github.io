import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/app.css";
import React from "react";
import loadable from "@loadable/component";
// Asset to convert
import asset from "../../../static/android-chrome-512x512.png";

import editPixels from "../grayscale/average";

let img;
let w = 160;
let canvas;

export default function rgb(props) {
	const preload = (p5) => {
		img = p5.loadImage(asset); // Cargar la imagen
	};
	const setup = (p5, canvasParentRef) => {
		canvas = p5.createCanvas(800, 500);
		canvas.parent(canvasParentRef);
		p5.noLoop();
	};

	const draw = (p5) => {
		p5.background(0);
		img.loadPixels();
		p5.image(img, 0, 0, p5.width, p5.height);
		p5.image(editPixels(p5, img, props.technique), 0, 0, p5.width, p5.height);
	};
	if (typeof window !== "undefined") {
		const Sketch = loadable(() => import("react-p5"));
		return <Sketch setup={setup} draw={draw} preload={preload} />;
	} else {
		//     // if window does not exist
		return null;
	}
}
