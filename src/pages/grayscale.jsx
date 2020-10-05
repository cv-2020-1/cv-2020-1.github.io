import React from "react";
import Grayscale from "../algorithms/grayscale/grayScale";

import imagen from "../assets/LUMA.png";
import codigo from "../assets/Code.png";

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
				<h2>Modificando los pixeles con el método de la desaturación </h2>
				<p>
					La desaturación de una imagen funciona convirtiendo un triplete RGB en
					un triplete HSL y luego obligando a la saturación a cero. Básicamente,
					esto toma un color y lo convierte en su variante menos saturada . Las
					matemáticas de esta conversión son más complejas de lo que garantiza
					este artículo, por lo que simplemente proporcionaré el cálculo del
					método abreviado. Un píxel se puede desaturar encontrando el punto
					medio entre el máximo de (R, G, B) y el mínimo de (R, G, B),
				</p>
				<div background="white">
					<img
						src="http://latex.codecogs.com/svg.latex?pixel_%7Bcanal%7D=%5Cfrac%7B%20%5Cmax%7B%20(%20r,%20g,%20b)%20%7D%20&plus;%20%20%5Cmin%7B%20(r,%20g,%20b)%20%7D%20%7D%7B2%7D"
						height="100px"
						style={divStyle}
					/>
				</div>
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
					escala de grises
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
				<h2>Escala de Grises por Hardware (Shaders)</h2>
				Una forma mucho mas eficiente de dibujar en nuestra pantalla una imagen
				es mediante shaders, ya que la misma aprovecha los diferentes nucleos de
				nuestra GPU para procesar paralelamente cada uno de los pixeles que
				deseamos renderizar.
				<br />
				<img src={imagen} height="800px" />
				<h3>Código que ejecutara cada nucleo de la GPU</h3>
				Como cada uno de los procesadores de la GPU debe ejecutar codigo de
				manera independiente se debe crear un archivo de tipo ".glsl" para
				enviar a cada uno de ellos.
				<br />
				<img src={codigo} height="300px" />
				<h2>Conclusiones</h2>
				<ul>
					<li>
						Existen diferentes mecanismos para transformar una imagen a escala
						de grises, los cuales tambien utilizan diferentes enfoques y
						producen resultados con diferentes variaciones.
					</li>
					<li>
						Tranformar una imagen en escala de grises es altamente pararelizable
						ya que la operación se puede realizar de manera independiente sobre
						cada uno de los pixeles.
					</li>
					<li>
						Los Shaders utilizan cada uno de los nucleos de la GPU de manera
						independiente para modificar cada uno de los pixeles paralelamente y
						realizar el proceso mas rapidamente.
					</li>
				</ul>
				<h3>Referencias</h3>
				<ul>
					<li>
						https://www.uv.es/gpoei/eng/Pfc_web/generalidades/grises/grey.htm
					</li>
					<li>https://en.wikipedia.org/wiki/Grayscale</li>
					<li>
						https://www.dspace.espol.edu.ec/bitstream/123456789/10715/1/I.pdf
					</li>
					<li>
						http://roberto-mtz.blogspot.com/2013/02/lab-1-escala-de-grises-promedio-umbral.html
					</li>
					<li>
						https://tannerhelland.com/2011/10/01/grayscale-image-algorithm-vb6.html
					</li>
				</ul>
			</div>
		</div>
	);
};
