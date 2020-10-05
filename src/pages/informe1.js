import React from "react";
import Cover from "../@lekoarts/gatsby-theme-cara/components/cover";

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

				<h2>SOLUCIONES</h2>
				<Cover
					title="Escala de Grises"
					link="/grayscale"
					bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
				>
					Escala de grises
				</Cover>
				<Cover
					title="Convolucion con P5"
					link="/convolutionMask"
					bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
				>
					Convoluciones en P5 con distintos kernels para tratamiento de
					imágenes.
				</Cover>
				<Cover
					title="Histograma"
					link="/histograma"
					bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
				>
					Histograma de imagen
				</Cover>
				<Cover
					title="Eficiencia computacional"
					link="/video"
					bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
				>
					Eficiencia computacional con videos
				</Cover>
				<br></br>
			</div>
		</div>
	);
};
