import React from "react";
import Bricks from "../algorithms/Illusions/bricks";
import CafeWall from "../algorithms/Illusions/cafeWall";
import Ebbinghaus from "../algorithms/Illusions/ebbinghaus";
import Grid from "../algorithms/Illusions/grid";
import Bezier from "../algorithms/Illusions/bezier";
import Gradient from "../algorithms/Illusions/gradient";
import White from "../algorithms/Illusions/white";
import Poggendorff from "../algorithms/Illusions/poggendorff";
import Motion_Binding from "../algorithms/Illusions/motion_binding";
import Squares from "../algorithms/Illusions/squares";
import TessellationCross from "../algorithms/Illusions/tessellationCross";
import Mixer from "../algorithms/Illusions/mixer";

export default () => {
	return (
		<div className="ml-5 mr-5 my-3">
			<div>
				<h1>Ilusiones</h1>
				<h2>Cafe Wall</h2>
				<p>
					La ilusión de la pared de la cafetería es un tipo de ilusión
					óptico-geométrica, en la que líneas rectas paralelas que dividien
					líneas entre filas formadas por baldosas blancas y negras alternas y
					escalonadas, aparentan estar inclinadas.
				</p>
				<CafeWall />
				<h2>Ebbinghaus</h2>
				<p>
					La ilusión de Ebbinghaus es una ilusión óptica que altera la
					percepción de las dimensiones relativas. En la versión más conocida de
					la ilusión, dos círculos de la misma medida son colocados cercanos uno
					a otro y son circundados, uno por círculos de un tamaño mayor y el
					otro por círculos de menor tamaño; el primer círculo central parecerá
					más pequeño que el otro
				</p>
				<Ebbinghaus />
				<h2>Grid</h2>
				<p>
					La ilusión de cuadrícula de Hermann es una ilusión óptica descrita por
					Ludimar Hermann en 1870. La ilusión se caracteriza por manchas grises
					"fantasmales" que se perciben en las intersecciones de una cuadrícula
					blanca (o de color claro) sobre un fondo negro. Las manchas grises
					desaparecen al mirar directamente a una intersección.
				</p>
				<Grid />
				<h2>Stepping feet</h2>
				<p>
					La ilusión de los pasos es un experimento psicológico muy famoso.
					Ambos bloques parecen moverse a velocidades diferentes, pero en
					realidad se mueven a la misma velocidad. Haz click con el ratón para
					confirmar que se mueven a la misma velocidad.
				</p>
				<Bricks />
				<h2>Bézier curve</h2>
				<p>
					Se denomina curvas de Bézier a un sistema que se desarrolló hacia los
					años 1960 para el trazado de dibujos técnicos, en el diseño
					aeronáutico y en el de automóviles. Su denominación es en honor a
					Pierre Bézier, quien ideó un método de descripción matemática de las
					curvas que se comenzó a utilizar con éxito en los programas de CAD.
				</p>
				<Bezier />
				<h2>Color gradient</h2>
				<p>
					El fondo es un degradado de color y progresa de gris oscuro a gris
					claro. La barra horizontal parece progresar de gris claro a gris
					oscuro, pero en realidad es de un solo color. Si mantiene presionado
					el click izquierdo, cambiará el color del fondo pero no el color de la
					barra horizontal.
				</p>
				<Gradient />
				<h2>White's illusion</h2>
				<p>
					La ilusión del blanco es una ilusión de brillo en la que ciertas
					franjas de una rejilla en blanco y negro se reemplazan parcialmente
					por un rectángulo gris. Ambas barras grises son del mismo color y
					opacidad. El brillo de las piezas grises parece cambiar hacia el
					brillo de las franjas fronterizas superior e inferior. Esto está en
					aparente oposición a la inhibición lateral, ya que no puede explicar
					esta ocurrencia. Esto ocurre incluso cuando las manchas grises en las
					franjas negras están bordeadas por más blanco que negro (y a la
					inversa para las manchas grises en las franjas blancas). Al mantener
					el click izquierdo presionado, se quitarán las franjas horizontales y
					dejarán ver que ambos bloques son del mismo color.
				</p>
				<White />
				<h2>Poggendorff illusion</h2>
				<p>
					La ilusión de Poggendorff es una ilusión geométrico-óptica que implica
					la percepción errónea de la posición de un segmento de una línea
					transversal que ha sido interrumpida por el contorno de una estructura
					intermedia. Si mantiene presionado el click izquierdo, se quitará la
					estructura intermedia.
				</p>
				<Poggendorff />
				<h2>Motion binding</h2>
				<p>
					Técnicamente, el mecanismo que funciona aquí se conoce como "enlace de
					movimiento". Mire el centro de la imagen, los dos pares de líneas
					parecen moverse uno frente al otro. Si mantiene el click izquierdo
					presionado, aparecerán unas estructuras en cada vértice que le
					permitirán observar mejor el cuadrado.
				</p>
				<Motion_Binding />
				<h2>Other optical illusions</h2>
				<p>
					Al fondo se observa un cuadrado girando, dando la sensación de
					acercarse y alejarse, si mantienes presionado el click izquierdo
					quitarás los cuadrados naranjas y así podrás observar mejor la
					rotación del cuadrado azul.
				</p>
				<Squares />

				<p>Teselation</p>
				<TessellationCross />

				<h2>Mixer</h2>
				<Mixer />

				<h2>Referencias</h2>
				<ul>
					<li>
						<a href="https://www.illusionsindex.org/i/cafe-wall-illusion">
							Cafe Wall
						</a>
					</li>
					<li>
						<a href="https://es.wikipedia.org/wiki/Ilusi%C3%B3n_de_Ebbinghaus">
							Ebbinghaus
						</a>
					</li>
					<li>
						<a href="https://en.wikipedia.org/wiki/Grid_illusion">
							Grid Illusion
						</a>
					</li>
					<li>
						<a href="https://en.wikipedia.org/wiki/Stepping_feet_illusion">
							Stepping feet illusion
						</a>
					</li>
					<li>
						<a href="https://en.wikipedia.org/wiki/B%C3%A9zier_curve">
							Bézier curve
						</a>
					</li>
					<li>
						<a href="https://en.wikipedia.org/wiki/Optical_illusion#/media/File:Gradient-optical-illusion.svg">
							Color gradient
						</a>
					</li>
					<li>
						<a href="https://en.wikipedia.org/wiki/White's_illusion">
							White's illusion
						</a>
					</li>
					<li>
						<a href="https://en.wikipedia.org/wiki/Poggendorff_illusion">
							Poggendorff illusion
						</a>
					</li>
					<li>
						<a href="https://michaelbach.de/ot/mot-motionBinding/index.html">
							Motion binding
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
