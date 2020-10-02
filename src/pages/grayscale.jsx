import React from "react";
import Grayscale from "../algorithms/grayscale/grayScale";

export default () => {
	return (
		<div className="ml-5 mr-5 my-3">
			<div>
				<h1>Escala de Grises</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
					soluta, tempore praesentium earum veritatis cupiditate quia. Eos ipsa
					corrupti quisquam voluptate nisi atque quidem excepturi doloremque
					commodi, blanditiis accusamus dolorum adipisci odio. Possimus
					molestias, incidunt suscipit voluptates a commodi quos!
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
				<h2>Técnica de AverageGrayScale</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
					incidunt rerum labore quis blanditiis impedit aliquid nobis. Et,
					perspiciatis ea, sit eum delectus fugit rerum eligendi quae officia
					dolore iusto commodi earum cum expedita sed quam eaque ab mollitia
					nobis, accusantium hic facere. Quibusdam excepturi magni numquam.
					Esse, unde delectus!
				</p>
				<Grayscale technique={"average"} />
				<h2>Técnica de luminosityGrayScale</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quasi
					eum iure, harum, qui quos, voluptatem quas sit suscipit eligendi
					architecto tempora aut! Delectus doloribus dolor vel, ducimus
					recusandae rerum laborum consequuntur, culpa, soluta modi obcaecati ut
					quisquam impedit nostrum ratione ea id fugit expedita voluptate quas
					voluptates! Aperiam, cumque.
				</p>
				<Grayscale technique={"luminosity"} />
			</div>
		</div>
	);
};
