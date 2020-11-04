import React from "react";

// prettier-ignore
import '../styles/cardPresentation.css';

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
import Cubik from "../algorithms/Illusions/cubik";
import TessellationCross from "../algorithms/Illusions/tessellationCross";
import Mixer from "../algorithms/Illusions/mixer";

import Gist from "react-gist";

export default () => {
	return (
		<div className="ml-5 mr-5 my-3">
			<div>
				<h1>Ilusiones</h1>
				<table class="table table-dark">
					<thead>
						<tr>
							<th scope="col">Ilusión</th>
							<th scope="col">Categoria</th>
							<th scope="col">Referencia</th>
							<th scope="col">Tipo de interactividad (si aplica)</th>
							<th scope="col"> URL código base (si aplica)</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">
								<a href="https://www.illusionsindex.org/i/cafe-wall-illusion">
									Cafe Wall
								</a>
							</th>
							<td>Geometrica</td>
							<td>https://www.illusionsindex.org/i/cafe-wall-illusion</td>
							<td>Movimiento e interactividad</td>
							<td>
								https://github.com/VisualComputing/Cognitive/blob/gh-pages/sketches/cafe_wall.js
							</td>
						</tr>
						<tr>
							<th scope="row">
								<a href="https://es.wikipedia.org/wiki/Ilusi%C3%B3n_de_Ebbinghaus">
									Ebbinghaus
								</a>
							</th>
							<td>Optica</td>
							<td>https://es.wikipedia.org/wiki/Ilusi%C3%B3n_de_Ebbinghaus</td>
							<td>Movimiento</td>
							<td>
								https://github.com/VisualComputing/Cognitive/blob/gh-pages/sketches/Ebbinghaus.js
							</td>
						</tr>
						<tr>
							<th scope="row">
								<a href="https://en.wikipedia.org/wiki/Grid_illusion">
									Grid Illusion
								</a>
							</th>
							<td>Optica Psycologica</td>
							<td>https://en.wikipedia.org/wiki/Grid_illusion</td>
							<td>No hay interactividad</td>
							<td>
								https://github.com/VisualComputing/Cognitive/blob/gh-pages/sketches/scintillating_grid.js
							</td>
						</tr>
						<tr>
							<th scope="row">
								<a href="https://en.wikipedia.org/wiki/Stepping_feet_illusion">
									Stepping feet illusion
								</a>
							</th>
							<td>Optica</td>
							<td>https://en.wikipedia.org/wiki/Stepping_feet_illusion</td>
							<td>Interactividad Con Click</td>
							<td>
								https://github.com/VisualComputing/Cognitive/blob/gh-pages/sketches/wagonWheel.js
							</td>
						</tr>
						<tr>
							<th scope="row">
								<a href="https://en.wikipedia.org/wiki/B%C3%A9zier_curve">
									Bézier curve
								</a>
							</th>
							<td>Geometrica</td>
							<td>https://en.wikipedia.org/wiki/B%C3%A9zier_curve</td>
							<td>No hay interactividad, Se aprecia solo al comenzar</td>
							<td>https://p5js.org/es/reference/#/p5/bezier</td>
						</tr>
						<tr>
							<th scope="row">
								<a href="https://en.wikipedia.org/wiki/Optical_illusion#/media/File:Gradient-optical-illusion.svg">
									Color gradient
								</a>
							</th>
							<td>Optica Psycologica</td>
							<td>
								https://en.wikipedia.org/wiki/Optical_illusion#/media/File:Gradient-optical-illusion.svg
							</td>
							<td>Interactividad Con Click</td>
							<td>
								https://github.com/VisualComputing/Cognitive/blob/gh-pages/sketches/color_gradient.js
							</td>
						</tr>
						<tr>
							<th scope="row">
								<a href="https://en.wikipedia.org/wiki/White's_illusion">
									White's illusion
								</a>
							</th>
							<td>Optica Psycologica</td>
							<td>https://en.wikipedia.org/wiki/White's_illusion</td>
							<td>Interactividad Con Click</td>
							<td>
								https://github.com/VisualComputing/Cognitive/blob/gh-pages/sketches/whites.js
							</td>
						</tr>
						<tr>
							<th scope="row">
								<a href="https://en.wikipedia.org/wiki/Poggendorff_illusion">
									Poggendorff illusion
								</a>
							</th>
							<td>Geometrica</td>
							<td>https://en.wikipedia.org/wiki/Poggendorff_illusion</td>
							<td>Interactividad Con Click</td>
							<td>
								https://github.com/VisualComputing/Cognitive/blob/gh-pages/sketches/poggendorff.js
							</td>
						</tr>
						<tr>
							<th scope="row">
								<a href="https://michaelbach.de/ot/mot-motionBinding/index.html">
									Motion binding
								</a>
							</th>
							<td>Optica</td>
							<td>https://michaelbach.de/ot/mot-motionBinding/index.html</td>
							<td>Interactividad Con Click</td>
							<td>
								https://github.com/VisualComputing/Cognitive/blob/gh-pages/sketches/MotionBinding.js
							</td>
						</tr>
						<tr>
							<th scope="row">
								<a href="http://visualcomputing.github.io/Cognitive/#/5/34">
									Squares Motion
								</a>
							</th>
							<td>Geometrica</td>
							<td>http://visualcomputing.github.io/Cognitive/#/5/34</td>
							<td>Interactividad Con Click</td>
							<td>
								https://github.com/VisualComputing/Cognitive/blob/gh-pages/sketches/rotateSquare.js
							</td>
						</tr>
						<tr>
							<th scope="row">
								<a href="">Cubik 3D</a>
							</th>
							<td>Geometrica</td>
							<td>Ninguno</td>
							<td>Interactividad Con Click</td>
							<td>Ninguno</td>
						</tr>
						<tr>
							<th scope="row">
								<a href="">Mixer Licuadora</a>
							</th>
							<td>3D</td>
							<td>Ninguna Referencia</td>
							<td>Interactividad Con Click</td>
							<td>Ninguno</td>
						</tr>
						<tr>
							<th scope="row">
								<a href="">Teselation Cross</a>
							</th>
							<td>Geometrica</td>
							<td>Ninguno</td>
							<td>Ninguno</td>
							<td>Ninguno</td>
						</tr>
						<tr>
							<th scope="row">
								<a href="">Escalera 2D - 3D</a>
							</th>
							<td>Geometrica</td>
							<td>Ninguno</td>
							<td>Interactividad arrastrando</td>
							<td>
								https://www.youtube.com/watch?v=LhrpKLPdgFw&feature=emb_title&ab_channel=KidsLet%27sDraw
							</td>
						</tr>
					</tbody>
				</table>

				<h2>Cafe Wall</h2>
				<div className="container ">
					<div className="row ">
						<div className="col-sm">
							<p>
								<b>Descripción: </b>La ilusión de la pared de la cafetería es un
								tipo de ilusión óptico-geométrica, en la que líneas rectas
								paralelas que dividien líneas entre filas formadas por baldosas
								blancas y negras alternas y escalonadas, aparentan estar
								inclinadas.
							</p>
							<p>
								<b>Como se usa: </b>Al mover el mouse de izquierda a derecha
								conseguira mover la posición filas, de esta manera notara que
								las filas son completamente horizontales y no estan inclinadas
								como se aparenta en la ilusión.
							</p>
							<div className="altura">
								<Gist
									id="d6cd78d5c67bd3e6451c3c747e4a2806"
									file="cafeWall.js"
								/>
							</div>
						</div>

						<div className="col-sm">
							<CafeWall />
						</div>
					</div>
				</div>

				<h2>Ebbinghaus</h2>
				<div className="container ">
					<div className="row ">
						<div className="col-sm">
							<p>
								<b>Descripción: </b> La ilusión de Ebbinghaus es una ilusión
								óptica que altera la percepción de las dimensiones relativas. En
								la versión más conocida de la ilusión, dos círculos de la misma
								medida son colocados cercanos uno a otro y son circundados, uno
								por círculos de un tamaño mayor y el otro por círculos de menor
								tamaño; el primer círculo central parecerá más pequeño que el
								otro.
							</p>
							<p>
								<b>Como se usa: </b>Puede mover el mouse de izquieda a derecha y
								de esta manera conseguira ocultar los circulos que circundan el
								circulo rojo de esta manera podra descubrir que ambos circulos
								poseen el mismo tamaño.
							</p>
							<div className="altura">
								<Gist
									id="d6cd78d5c67bd3e6451c3c747e4a2806"
									file="ebbinghaus.js"
								/>
							</div>
						</div>

						<div className="col-sm">
							<Ebbinghaus />
						</div>
					</div>
				</div>

				<h2>Grid twinkling illusion</h2>
				<div className="container ">
					<div className="row ">
						<div className="col-sm">
							<p>
								<b>Descripción: </b>La ilusión de centelleo de la rejilla es una
								ilusión óptica, descubierta por E. Lingelbach en 1994, que por
								lo general se considera una variación de la ilusión de la
								cuadrícula de Hermann. Se construye mediante la superposición de
								discos blancos en las intersecciones de barras grises
								ortogonales en un fondo negro.
							</p>

							<p>
								<b>Como se usa: </b> La ilusión hace creer al observador que
								existen puntos oscuros que aparecen y desaparecen rápidamente en
								las intersecciones aleatorias, de ahí la etiqueta
								“centelleante”.Cuando una persona mantiene sus ojos directamente
								en una sola intersección, no aparece el punto oscuro. Los puntos
								oscuros desaparecen si uno está demasiado cerca o demasiado
								lejos de la imagen.
							</p>

							<div className="altura">
								<Gist id="d6cd78d5c67bd3e6451c3c747e4a2806" file="grid.js" />
							</div>
						</div>

						<div className="col-sm">
							<Grid />
						</div>
					</div>
				</div>

				<h2>Stepping feet</h2>
				<div className="container ">
					<div className="row ">
						<div className="col-sm">
							<p>
								<b>Descripción: </b>La ilusión de los pasos es un experimento
								psicológico muy famoso. Ambos bloques parecen moverse a
								velocidades diferentes, pero en realidad se mueven a la misma
								velocidad.
							</p>
							<p>
								<b>Como se usa: </b> Haz click con el ratón para confirmar que
								ambos rectangulos se mueven a la misma velocidad. El efecto
								desaparece debido a que se quita la textura rayada en el fondo y
								no queda contraste que permita percibir el efecto.
							</p>

							<div className="altura">
								<Gist id="d6cd78d5c67bd3e6451c3c747e4a2806" file="bricks.js" />
							</div>
						</div>

						<div className="col-sm">
							<Bricks />
						</div>
					</div>
				</div>
				<p></p>

				<h2>Bézier curve</h2>
				<div className="container ">
					<div className="row ">
						<div className="col-sm">
							<p>
								<b>Descripción: </b>Se denomina curvas de Bézier a un sistema
								que se desarrolló hacia los años 1960 para el trazado de dibujos
								técnicos, en el diseño aeronáutico y en el de automóviles. Su
								denominación es en honor a Pierre Bézier, quien ideó un método
								de descripción matemática de las curvas que se comenzó a
								utilizar con éxito en los programas de CAD.
							</p>

							<p>
								<b>Como se usa: </b> Recarga la página para poder observar como
								se construye la curva de bezier.Unicamente con lineas rectas.
							</p>
							<div className="altura">
								<Gist id="d6cd78d5c67bd3e6451c3c747e4a2806" file="bezier.js" />
							</div>
						</div>

						<div className="col-sm">
							<Bezier />
						</div>
					</div>
				</div>
				<p></p>

				<h2>Color gradient</h2>
				<div className="container ">
					<div className="row ">
						<div className="col-sm">
							<p>
								<b>Descripción: </b>El fondo es un degradado de color y progresa
								de gris oscuro a gris claro. La barra horizontal parece
								progresar de gris claro a gris oscuro, pero en realidad es de un
								solo color.
							</p>
							<p>
								<b>Como se usa: </b> Si mantiene presionado el click izquierdo,
								cambiará el color del fondo pero no el color de la barra
								horizontal.
							</p>
							<div className="altura">
								<Gist
									id="d6cd78d5c67bd3e6451c3c747e4a2806"
									file="gradient.js"
								/>
							</div>
						</div>

						<div className="col-sm">
							<Gradient />
						</div>
					</div>
				</div>
				<p></p>

				<h2>White's illusion</h2>
				<div className="container ">
					<div className="row ">
						<div className="col-sm">
							<p>
								<b>Descripción: </b>La ilusión del blanco es una ilusión de
								brillo en la que ciertas franjas de una rejilla en blanco y
								negro se reemplazan parcialmente por un rectángulo gris. Ambas
								barras grises son del mismo color y opacidad. El brillo de las
								piezas grises parece cambiar hacia el brillo de las franjas
								fronterizas superior e inferior. Esto está en aparente oposición
								a la inhibición lateral, ya que no puede explicar esta
								ocurrencia. Esto ocurre incluso cuando las manchas grises en las
								franjas negras están bordeadas por más blanco que negro (y a la
								inversa para las manchas grises en las franjas blancas).
							</p>
							<p>
								<b>Como se usa: </b> Al mantener el click izquierdo presionado,
								se quitarán las franjas horizontales y dejarán ver que ambos
								bloques son del mismo color.
							</p>
							<div className="altura">
								<Gist id="d6cd78d5c67bd3e6451c3c747e4a2806" file="white.js" />
							</div>
						</div>

						<div className="col-sm">
							<White />
						</div>
					</div>
				</div>
				<p></p>

				<h2>Poggendorff illusion</h2>

				<div className="container ">
					<div className="row ">
						<div className="col-sm">
							<p>
								<b>Descripción: </b>La ilusión de Poggendorff es una ilusión
								geométrico-óptica que implica la percepción errónea de la
								posición de un segmento de una línea transversal que ha sido
								interrumpida por el contorno de una estructura intermedia.
							</p>
							<p>
								<b>Como se usa: </b> Si mantiene presionado el click izquierdo,
								se quitará la estructura intermedia de tal manera que pueda
								observar con claridad que la línea rojo-verde es completamente
								recta.
							</p>
							<div className="altura">
								<Gist
									id="d6cd78d5c67bd3e6451c3c747e4a2806"
									file="poggendorff.js"
								/>
							</div>
						</div>

						<div className="col-sm">
							<Poggendorff />
						</div>
					</div>
				</div>

				<h2>Motion binding</h2>
				<div className="container ">
					<div className="row ">
						<div className="col-sm">
							<p>
								<b>Descripción: </b>Técnicamente, el mecanismo que funciona aquí
								se conoce como "enlace de movimiento". Mire el centro de la
								imagen, los dos pares de líneas parecen moverse uno frente al
								otro.
							</p>
							<p>
								<b>Como se usa: </b> Si mantiene el click izquierdo presionado,
								aparecerán unas estructuras en cada vértice que le permitirán
								observar mejor el cuadrado en movimiento.
							</p>
							<div className="altura">
								<Gist
									id="d6cd78d5c67bd3e6451c3c747e4a2806"
									file="motion_binding.js"
								/>
							</div>
						</div>

						<div className="col-sm">
							<Motion_Binding />
						</div>
					</div>
				</div>

				<h2>Squares</h2>
				<div className="container ">
					<div className="row ">
						<div className="col-sm">
							<p>
								<b>Descripción: </b>Al fondo se observa un cuadrado girando,
								dando la sensación de acercarse y alejarse.
							</p>
							<p>
								<b>Como se usa: </b>si mantienes presionado el click izquierdo
								quitarás los cuadrados naranjas y así podrás observar mejor la
								rotación del cuadrado azul.
							</p>
							<div className="altura">
								<Gist id="d6cd78d5c67bd3e6451c3c747e4a2806" file="squares.js" />
							</div>
						</div>

						<div className="col-sm">
							<Squares />
						</div>
					</div>
				</div>

				<h2>Cubik 3D</h2>
				<div className="container ">
					<div className="row ">
						<div className="col-sm">
							<p>
								<b>Descripción: </b>Ilusión de movimiento que consiste en dar la
								percepción al espectador que se mueve un cubo en el medio
								mientras en realidad lo que se esta moviendo es la camara.
							</p>
							<p>
								<b>Como se usa: </b> Puede usar click para orbitar el elemento y
								notar que el cubo esta quieto y el entorno es el que presenta el
								movimiento.
							</p>
							<div className="altura">
								<Gist id="d6cd78d5c67bd3e6451c3c747e4a2806" file="cubik.js" />
							</div>
						</div>

						<div className="col-sm">
							<Cubik />
						</div>
					</div>
				</div>

				<h2>Mixer (Licuadora)</h2>
				<div className="container ">
					<div className="row ">
						<div className="col-sm">
							<p>
								<b>Descripción: </b>Al superponer muchas cruces una sobre otra y
								dibujar muchas de estas en fila y al hacerlas rotar podemos
								obtener una ilusión de un cilindro 3D, ademas de que aumentando
								mucho la velocidad de Giro se dibuja un cuadro en la mitad
							</p>
							<p>
								<b>Como se usa: </b> Presione el click izquierdo sobre el
								elemento, esto hara girar las cruces de tal manera que perciba
								un elemento cilindrico en 3D.
							</p>
							<div className="altura">
								<Gist id="d6cd78d5c67bd3e6451c3c747e4a2806" file="mixer.js" />
							</div>
						</div>

						<div className="col-sm">
							<Mixer />
						</div>
					</div>
				</div>

				<h2>Tessellation Cross</h2>
				<div className="container ">
					<div className="row ">
						<div className="col-sm">
							<p>
								<b>Descripción: </b>Este efecto es conocido como teselación, es
								decir la regularidad de un patrón de figuras que cubren
								totalmente una superficie plana cumpliendo con dos requisitos
								fundamentales: No dejar huecos y que las figuras no se
								superpongan. las cruces negras giran hacia la izquierda mientras
								que las cruces blancas realizan un giro hacia la derecha.
							</p>
							<p>
								<b>Como se usa: </b> Este efecto consigue cambiar el plano de
								fondo de blanco a negro y de negro a blanco, haciendo que a su
								vez las cruces también cambien de un color a otro. Los giros
								provocan una confusión momentánea en el cerebro que resulta muy
								interesante.
							</p>
							<div className="altura">
								<Gist
									id="d6cd78d5c67bd3e6451c3c747e4a2806"
									file="tessellationCross.js"
								/>
							</div>
						</div>

						<div className="col-sm">
							<TessellationCross />
						</div>
					</div>
				</div>
				<h2>Escalera 2d -3d</h2>
				<div className="container ">
					<div className="row ">
						<div className="col-sm">
							<p>
								<b>Descripción: </b>Esta ilusión consiste en un dibujo 2D que al
								visualizarse desde cierta perspectiva da la ilusión de tener
								cierta profundidad y representar un elemento en 3D.
							</p>
							<p>
								<b>Como se usa: </b> Arrastre el raton + click para orbitar el
								elemento y notar que es un dibujo en 2D doblado por la mitad en
								forma de L.Si desea observar el efecto nuevamente recargue la
								página.
							</p>
							<div className="altura">
								<Gist
									id="d6cd78d5c67bd3e6451c3c747e4a2806"
									file="stairs3Dillusion.js"
								/>
							</div>
						</div>

						<div className="col-sm">
							<iframe src="https://editor.p5js.org/bohurtadop/embed/S4jQ9P0iD"></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
