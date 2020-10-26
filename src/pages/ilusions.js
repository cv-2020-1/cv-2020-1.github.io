import React from "react";
import Bricks from "../algorithms/Illusions/bricks";
import CafeWall from "../algorithms/Illusions/cafeWall";
import Ebbinghaus from "../algorithms/Illusions/ebbinghaus";
import Grid from "../algorithms/Illusions/grid";
import Bezier from "../algorithms/Illusions/bezier";

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
				</ul>
			</div>
		</div>
	);
};
