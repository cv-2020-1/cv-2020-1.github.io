import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import diffuseimg from "../assets/light-images/diffuse_light.jpg";
import specularimg from "../assets/light-images/basic_lighting_specular_theory.jpg";
import combinedimg from "../assets/light-images/Blinn_Vectors.svg";

export default (props) => {
	if (typeof window !== "undefined") {
		return (
			<div className="ml-5 mr-5 my-3 center-content">
				<h1>
					<b>TALLER DE ILUMINACIÓN</b>
				</h1>
				<hr className="my-3"></hr>
				<h2>LUZ AMBIENTAL</h2>

				<div className="lights">
					<iframe
						src="https://cv-2020-1.github.io/ShadersLights/p5js-ambientlight/index.html"
						className="lights"
					></iframe>
				</div>

				<br/>
				<h4>DESCRIPCIÓN DEL MODELO DE LUZ AMBIENTAL</h4>
				<p>
					La luz usualmente no proviene de una sola fuente de luz, muchas
					fuentes de luz suelen impactar a un mismo objeto iluminando su
					superficie casi que uniformemente. Para simular esto, se tienen dos
					constantes, el color de la luz y la fuerza de la luz ambiente, estas
					dos constantes multiplicadas darán como resultado nuestra luz
					ambiente, que luego se multiplicará por el color del objeto y
					afectarlo directamente en toda su superficie.
				</p>
				<h4>COMO SE USA</h4>
				<p>
					La barra modifica la variable de luz ambiental tomando valores en un rango entre 0 y 1.
					En la parte de abajo hay dos objetos de selección que permiten cambiar el color del objeto y 
					el color de la luz brindando una mayor interacción.
				</p>
				
				<hr className="my-5"></hr>
				<h2>NIEBLA</h2>

				<div className="lights">
					<iframe
						src="https://cv-2020-1.github.io/ShadersLights/fog/index.html"
						className="lights"
					></iframe>
				</div>
				
				<h4>DESCRIPCIÓN DE LA NIEBLA</h4>
				<p>
					El efecto de niebla se basa en un truco que consiste en definir un color de fondo
					y a la figura se le aplica una función mix para tratar de establecer el color de la figura mas o menos
					igual al color de fondo a medida que se modifica el valor de una variable establecida que cuando toma el
					valor de 0 el color de la figura es el color original y cuando la variable toma el valor de 1 el color 
					de la figura tomaria el color establecido de la niebla que es similar al del fondo produciendo el efecto de niebla
				</p>
				<h4>COMO SE USA</h4>
				<p>
					La barra deslisante modifica el valor de la variable que determina el nivel de niebla del objeto.
					Esta variable toma valores entre 0 y 1 siendo 0 nada de niebla y 1 niebla total.
				</p>
				<hr className="my-5"></hr>
        		<h2>ATENUACIÓN</h2>

				<div className="lights">
					<iframe
						src="https://cv-2020-1.github.io/ShadersLights/attenuation/index.html"
						className="lights"
					></iframe>
				</div>

        		<h4>DESCRIPCIÓN DE LA ATENUACIÓN</h4>
				<p>
					La luz se debilita cuanto mas se aleja de su fuente. Para calcular la atenuación se usa la expresión 1/d^2
					donde d indica la distancia entre la fuente de luz y el objeto. A nivel de codigo se usa la expresión 
					1.0/(c1 + c2*d + c3*d^2) donde los valores c1, c2 y c3 se pueden modificar para manejar la atenuación.
				</p>


				<hr className="my-5"></hr>
				<h2>LUZ DIFUSA</h2>

				<div className="lights">
					<iframe
						src="https://cv-2020-1.github.io/ShadersLights/p5js-diffuse/index.html"
						className="lights"
					></iframe>
				</div>

				<h4>DESCRIPCIÓN DEL MODELO DE LUZ DIFUSA</h4>
				<p>
					El modelo de luz difusa, también conocida como modelo de Lambert, va
					un paso más adelante que la luz ambiente, se encarga de simular la
					dirección de los rayos de luz que afectan directamente al objeto, para
					esto necesitamos los vectores normales que son perpendiculares a las
					caras o superficies del objeto y así mismo necesitaremos la dirección
					del rayo de luz. Luego calculamos el producto entre cada vector normal
					y la dirección del rayo de luz, y escogemos el máximo entre dicho
					resultado y 0 (para evitar negativos), este resultado suele ser
					conocido como término de Lambert. Al final, para obtener el resultado
					sobre el color de nuestro objeto, agregamos a la ecuación el término
					de Lambert, multiplicando así nuestro resultado inicial de luz
					ambiente para cada cara del objeto.
				</p>
				<div className="lights">
					<img src={diffuseimg} width="600" height="400"></img>
				</div>


				<hr className="my-5"></hr>
				<h2>LUZ ESPECULAR</h2>

				<div className="lights">
					<iframe
						src="https://cv-2020-1.github.io/ShadersLights/p5js-specular/index.html"
						className="lights"
					></iframe>
				</div>

				<h4>DESCRIPCIÓN DEL MODELO DE LUZ ESPECULAR</h4>
				<p>
					Ahora se implementa un nuevo factor, agregando así un valor más a la
					ecuación. La luz especular también considera la posición y dirección
					desde las que se miran al objeto. Para esta simulación agregaremos
					entonces una variable adicional que tendrá la función de representar
					la “fuerza especular”, también calcularemos el vector de reflejo
					teniendo en cuenta el vector de dirección de la vista hacia el objeto.
					Para terminar, después de realizar los mismos cálculos que para la luz
					difusa, elevaremos ese valor resultante a una potencia que puede ir
					desde 2 hasta valores muy altos (256 o más), el valor de esta potencia
					hará el papel del brillo de nuestro reflejo, por lo tanto, un valor
					ideal estaría aproximadamente en 32.
				</p>
				<div className="lights">
					<img src={specularimg} width="600" height="400"></img>
				</div>


				<hr className="my-5"></hr>
				<h2>LUZ COMBINADA</h2>

				<div className="lights">
					<iframe
						src="https://cv-2020-1.github.io/Shaders/p5js-ambientlight/"
						className="lights"
					></iframe>
				</div>

				<h4>DESCRIPCIÓN DEL MODELO DE LUZ COMBINADA</h4>
				<p>
					La combinación de los efectos y simulaciones descritos anteriormente
					es llamada el modelo de reflexión de Phong, el cual se encarga de
					reunir cada uno de los vectores, así como variables y constantes de
					cada modelo. Describe la forma en que una superficie refleja la luz
					como una combinación de la reflexión difusa de las superficies rugosas
					con la reflexión especular de las superficies brillantes. El modelo
					también incluye un término de luz ambiental para simular la luz que se
					dispersa en el entorno.
				</p>
				<div className="lights" style={{background:"white"}}>
					<img src={combinedimg} width="600" height="400"></img>
				</div>
        <div>
          <h3>REFERENCIAS</h3>
          <ul>
            <li><a href="https://webglfundamentals.org/webgl/lessons/webgl-fog.html">Niebla</a></li>
            <li><a href="http://learnwebgl.brown37.net/09_lights/lights_attenuation.html">Atenuación</a></li>
            <li><a href="https://www.shadertoy.com/view/Xd3SWH">Atenuación</a></li>
          </ul>
        </div>  
			</div>
		);
	} else return null;
};
