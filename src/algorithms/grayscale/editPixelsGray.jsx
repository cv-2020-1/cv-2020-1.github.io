const editPixelsGray = (p5, img, tipo) => {
	img.loadPixels();
	var technique = "average";

	if (tipo == "average") {
		technique = averageGrayScale;
	} else if (tipo == "ligthness") {
		technique = ligthnessGrayScale;
	} else if (tipo == "luminosity") {
		technique = luminosityGrayScale;
	}

	for (var x = 1; x < img.width - 1; ++x) {
		for (var y = 1; y < img.height - 1; ++y) {
			let loc = (x + img.width * y) * 4;
			let average_rgb = technique(
				img.pixels[loc],
				img.pixels[loc + 1],
				img.pixels[loc + 2]
			);
			let color = p5.color(average_rgb, average_rgb, average_rgb);
			img.pixels[loc] = p5.red(color);
			img.pixels[loc + 1] = p5.green(color);
			img.pixels[loc + 2] = p5.blue(color);
		}
	}

	img.updatePixels();
	return img;
};

export default editPixelsGray;

function averageGrayScale(r, g, b) {
	return (r + g + b) / 3;
}

function ligthnessGrayScale(r, g, b) {
	return Math.max(r, g, b) + Math.min(r, g, b) / 2;
}

// Gray Scale with LuminosityGrayScale
function luminosityGrayScale(r, g, b) {
	return parseInt(0.21 * r + 0.72 * g + 0.07 * b);
}
