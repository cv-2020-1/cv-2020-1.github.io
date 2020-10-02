import React from "react";
import loadable from "@loadable/component";

import videomp4 from "../../assets/video.mp4";
import video2 from "../../assets/video.webm";

import {
	luminosityGrayScale,
	averageGrayScale,
	ligthnessGrayScale,
} from "../../algorithms/grayscale/average";

import editPixels from "../grayscale/average";
import convolution from '../../algorithms/convolution/convolution';
import {BoxBlurKernel, GaussianBlurKernel, SharpenKernel, EdgeDetectionKernel} from '../../algorithms/convolution/kernels'

export default (props) => {
	let playing = false;
	let video;
  	let button;
  	let size = 45;
  	let height = 9*size;
  	let width = 16*size;

	const setup = (p5, canvasParentRef) => {		
		p5.createCanvas(
			width,
			height
		).parent(canvasParentRef);
		video = p5.createVideo([videomp4, video2]).parent(canvasParentRef);
		button = p5.createButton("play");
		video.size(width, height);
		button.mousePressed(toggleVid);
		console.log(video.pixels);
	};

	const toggleVid = () => {
		if (playing) {
			video.pause();
			button.html("play");
		} else {
			video.loop();
			button.html("pause");
		}
		playing = !playing;
	};

	const draw = (p5) => {
		
		p5.background(500);
		//p5.image(video.size(width, height), 0, 0); // dibuja el cuadro del video en el lienzo.
		//p5.filter(p5.GRAY);

		// Convolucion
		video.loadPixels();
		//p5.image(convolution(p5, video, EdgeDetectionKernel),0,0, p5.width, p5.height);
		p5.image(editPixels(p5, video, ligthnessGrayScale),0,0, p5.width, p5.height);
		
		p5.image(video.size(width, height), width, 0);
	};

	if (typeof window !== "undefined") {
		const Sketch = loadable(() => import("react-p5"));
		return <Sketch setup={setup} draw={draw} />;
	} else {
		return null;
	}
};
