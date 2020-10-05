import React from "react";

export default () => {
	return (
		<div className="ml-5 mr-5 my-3">
			<div>
				<h1>INFORME 1</h1>
				<hr className="my-3"></hr>
				<p
					className="mb-4 text-justify"
					style={{ fontSize: "20px", width: "60%" }}
				>
					Implementar las siguientes operaciones de análisis para
					imágenes/video:
				</p>
				<ul className="mb-3">
					<li>Conversión a escala de grises: promedio rgb y luma.</li>
					<li>Aplicación de algunas máscaras de convolución.</li>
					<li>
						(solo para imágenes) Despliegue del histograma y segmentación a
						partir del mismo.
					</li>
					<li>
						(solo para video) Medición de la eficiencia computacional para las
						operaciones realizadas. 
					</li>
				</ul>
				
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
