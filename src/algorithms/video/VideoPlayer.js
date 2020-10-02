import React from "react";
import loadable from "@loadable/component";

/* RECURSOS DE VIDEO */
import videomp4 from "../../assets/video.mp4";
import videowebm from "../../assets/video.webm";

/* IMPORTACIONES ESCALA DE GRISES */
import { /*luminosityGrayScale*/ _, /*averageGrayScale*/ __, ligthnessGrayScale } from "../grayscale/editPixelsGray";
import editPixels from "../grayscale/editPixelsGray";

/* IMPORTANCIONES CONVOLUCION */
import convolution from '../../algorithms/convolution/convolution';
import {___, ____, _____, EdgeDetectionKernel} from '../../algorithms/convolution/kernels'



export default (props) => {
	let playing = false;
	let size = 45;
	let height = 9*size;
  	let width = 16*size;  
	let video;
	let button;

	let state = 0;

	const setup = (p5, canvasParentRef) => {		
		p5.createCanvas(width,height).parent(canvasParentRef);
		video = p5.createVideo([videomp4, videowebm]);
		video.parent(canvasParentRef);
		video.size(width, height);


		button = p5.createButton("play");
		button.mousePressed(toggleVid);
		// video.pause();
		//video.play()
		//video.loop();
		// playing = true;		
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
		p5.background(255);

		//video.loadPixels();
		p5.image(video.size(width,height), 0, 0);
		p5.filter(p5.GRAY);

		// MAQUINA DE ESTADOS
		/*
		switch(state){
			case 0: // FILTRO GRIS
				p5.image(video, 0, 0);
				p5.filter(p5.GRAY);
				break;
			case 1:// CONVOLUCION DETECTOR DE BORDES
				p5.image(convolution(p5, video, EdgeDetectionKernel),0,0, p5.width, p5.height);
				break;
			case 2:// ESCALA DE GRISES CON BRILLO
				p5.image(editPixels(p5, video, "average"),0,0, p5.width, p5.height);
				break;
			default:
				p5.image(video, 0, 0, p5.width, p5.height);
				break;
		}*/
		
		p5.image(video, width, 0);
		
	};

	if (typeof window !== "undefined") {
		const Sketch = loadable(() => import("react-p5"));
		return <Sketch setup={setup} draw={draw}/>;
	} else {
		return null;
	}
};
