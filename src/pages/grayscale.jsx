import React from "react";
import Grayscale from "../algorithms/grayscale/grayScale";

export default () => {
	const divStyle = {
		backgroundColor: "white",
		padding: "20px",
	};
	return (
		<div className="ml-5 mr-5 my-3">
			<div>
				<h1>Escala de Grises</h1>
				<p>
					A continuación se describen diferentes tecnicas que se pueden aplicar
					para conseguir transformar una imagen en escalda de grises.
				</p>
				<h2>Modificando los pixeles Grayscale</h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
					consequatur repellendus? Magnam quasi pariatur voluptatum ipsum
					corporis sed animi, labore optio harum aut. Saepe deleniti vero
					aliquam libero maiores adipisci ipsum molestias? Esse nisi, rerum
					explicabo, officia cupiditate et temporibus earum suscipit asperiores
					necessitatibus amet itaque quibusdam iste quia obcaecati sint, aperiam
					ipsa fugit! Rerum, nobis. Corrupti sequi saepe vel accusantium natus,
					nihil quo officia at! Et, unde saepe nostrum doloremque sint repellat
					labore molestias corporis delectus reiciendis beatae possimus debitis
					alias, quas ullam accusamus voluptatum aperiam dolore animi in, natus
					recusandae cum aut a? Possimus praesentium architecto cum culpa.
				</p>
				<Grayscale technique={"ligthness"} />
				<h2>Técnica del Promedio</h2>
				<p>
					Este proceso se basa en la estimación del la tonalidad de gris
					aplicando un promedio en los 3 canales que tiene cada uno de los
					pixeles presentes en la imagen.A continuación se muestra la formula
					que se utiliza para obtener el valor de gris con el cual quedara cada
					uno de los canales (RGB) en cada pixeles.
				</p>
				<div background="white">
					<img
						src="http://latex.codecogs.com/svg.latex?pixel_%7Bcanal%7D%20=%20%5Cfrac%7Br%20&plus;%20g%20&plus;%20b%7D%7B3%7D"
						height="100px"
						style={divStyle}
					/>
				</div>
				<Grayscale technique={"average"} />
				<h2>
					Conversión colorimétrica (preservación de la luminancia perceptiva) a
					escala de grises{" "}
				</h2>
				<p>
					Otra estrategía que se puede utilizar para que el ojo humano perciba
					una imagen en escala de grises es modificar la intesidad de luz que el
					ojo percibe en función del color que se esta observando. De esta
					manera podemos usar la siguiente acuación de la luminancia nos muestra
					la expresión matemática de ese fenómeno y los factores de ponderación
					de cada componente de color nos indican la sensibilidad del ojo humano
					a las frecuencias del espectro cercanas al rojo, verde y azul.
				</p>
				<div background="white">
					<img
						src="http://latex.codecogs.com/svg.latex?pixel_%7Bcanal%7D%20=%20%5Cleft%20%5Clfloor%20%7B0.21*R_%7Bcanal%7D%20&plus;%200.72%20*G_%7Bcanal%7D%20&plus;%200.07%20*B_%7Bcanal%7D%7D%20%5Cright%20%5Crfloor"
						height="100px"
						style={divStyle}
					/>
				</div>
				<Grayscale technique={"luminosity"} />

				<h3>Referencias</h3>
				<ul>
					<li>
						https://www.uv.es/gpoei/eng/Pfc_web/generalidades/grises/grey.htm
					</li>
					<li>https://en.wikipedia.org/wiki/Grayscale</li>
					<li>
						https://www.dspace.espol.edu.ec/bitstream/123456789/10715/1/I.pdf
					</li>
				</ul>
			</div>
		</div>
	);
};
