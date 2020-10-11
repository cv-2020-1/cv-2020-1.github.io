import React, { useState } from "react";
import VideoPlayer from "../algorithms/video/VideoPlayer";

export default () => {
	const [state, setValue] = useState(0); // integer state

	const submitForm = (e) => {
		e.preventDefault();
	};

	const radioChange = (param, e) => {
		switch (param) {
			case "r1":
				setValue(0);
				/*state = 0;*/ break;
			case "r2":
				setValue(1);
				/*state = 1;*/ break;
			case "r3":
				setValue(2);
				/*state = 2;*/ break;
			case "r4":
				setValue(3);
				/*state = 3;*/ break;
		}
	};

	return (
		<div className="ml-5 mr-5 my-3">
			<div>
				<h1>Eficiencia computacional en video</h1>
				<hr className="my-3"></hr>
				<p
					className="mb-4 text-justify"
					style={{ fontSize: "20px", width: "60%" }}
				>
					En esta sección implementamos las mascaras de convolución y escala de
					grises para un video aplicando 1 filtro, 1 máscara de convolución y la
					escala de grises.
					<strong> El video original</strong> se encuentra a la izquierda, y
					<strong> El video procesado</strong> se encuentra a la derecha.
					Adicionalmente se implementó un selector en la parte inferior que
					permite al cliente escoger el tipo de procesamiento para el video.
				</p>
				<p
					className="mb-4 text-justify"
					style={{ fontSize: "20px", width: "60%" }}
				>
					También se encontrarán en la parte inferior, los indicadores del
					framerate y la eficiencia de cada tipo de procesamiento para el video.
					<strong> La eficiencia computacional</strong> se calculó a partir de
					la siguiente fórmula: e = (framerate * 100) / 60. Cabe resaltar que el
					video original tiene por defecto 60 fotogramas por segundo y la
					eficiencia se muestra en medidas de porcentaje con respecto al video
					original.
				</p>
				<VideoPlayer state={state} />
				<form onSubmit={submitForm}>
					<input
						type="radio"
						className="mx-3"
						id="r1"
						name="group1"
						value="r1"
						onChange={radioChange.bind(this, "r1")}
					/>
					<label htmlFor="r1">FILTRO GRIS</label>
					<input
						type="radio"
						className="mx-3"
						id="r2"
						name="group1"
						value="r2"
						onChange={radioChange.bind(this, "r2")}
					/>
					<label htmlFor="r2">CONVOLUCION DETECTOR BORDES</label>
					<input
						type="radio"
						className="mx-3"
						id="r3"
						name="group1"
						value="r3"
						onChange={radioChange.bind(this, "r3")}
					/>
					<label htmlFor="r3">ESCALA GRISES</label>
					<input
						type="radio"
						className="mx-3"
						id="r4"
						name="group1"
						value="r4"
						onChange={radioChange.bind(this, "r4")}
					/>
					<label htmlFor="r4">VIDEO ORIGINAL</label>
				</form>
				<br></br>
				<p style={{ fontSize: "30px" }}>
					FRAMERATE: <span id="framerate"></span>
				</p>
				<p style={{ fontSize: "30px" }}>
					EFFICIENCY: <span id="efficiency"></span>
				</p>
				<br></br>
				<h2>CONCLUSIONES</h2>
				<ul className="mb-3">
					<li>
						1) Dependiendo del tipo de procesamiento del video, la carga para la
						computadora cambia, haciendo que también cambie la eficiencia
						computacional.
					</li>
					<li>
						2) En algunos casos, es difícil visualizar incluso los 60 fps del
						video original, nuevamente dependiendo de la carga computacional.
					</li>
					<li>
						3) La velocidad con que se renderiza cada fotograma del video
						depende principalmente del filtro escogido.
					</li>
				</ul>
				<br></br>
				<h2>REFERENCIAS</h2>
				<a href="https://p5js.org/es/examples/dom-video.html">
					https://p5js.org/es/examples/dom-video.html
				</a>
				<br></br>
				<a href="https://p5js.org/es/examples/dom-video-canvas.html">
					https://p5js.org/es/examples/dom-video-canvas.html
				</a>
				<br></br>
				<br></br>
				<br></br>
			</div>
		</div>
	);
};
