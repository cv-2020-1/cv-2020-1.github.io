import React from "react";
import loadable from "@loadable/component";
import imagen from "../assets/mujer.png";

export default () => {
	var img;
	var segmentedImage;
    var hist = new Array(256).fill(0);
    var probability = new Array(256).fill(0);
	var minVar = Number.MAX_VALUE;
	var minThreshold = 0;

	function preload(p5) {
		img = p5.loadImage(imagen);
		segmentedImage = p5.loadImage(imagen);
	}

	function setup(p5, canvasParentRef) {
		p5.createCanvas((img.width * 3) + 20, img.height + 10).parent(canvasParentRef);
		p5.colorMode(p5.HSB, 255);
		p5.image(img, 0, 0);

		img.loadPixels();

		//Calcula el histograma
		for (let x = 0; x < img.width; x++) {
			for (let y = 0; y < img.height; y++) {
				var bright = p5.int(p5.brightness(p5.get(x, y)));
				hist[bright]++;
			}
		}
		hist = hist.map((x) => (x === 0 ? 1 : x));
		
		/////////////////////ALGORITMO OTSU//////////////////////////

        //Calculo de la probabilidad para cada valor de intensidad
        var imageTotalPixels = img.pixels.length / 4;
        for (var i = 0; i < 256; i++) {
            probability[i] = (hist[i]) / imageTotalPixels;
        }

        //iterar sobre todos los posibles Thresholds y encontrar la varianza minima
        for(var t = 0; t < 255; t++) {
            //pesos clase 1 y 2
            var c1Weight = 0;
            var c2Weight = 0;
            for(var i = 0; i < t; i++) {
                c1Weight += probability[i];
            }
            for(var i = t + 1; i < 256; i++) {
                c2Weight += probability[i];
            }

            //promedios calse 1 y 2
            var c1Mean = 0;
            var c2Mean = 0;
            for(var i = 0; i < t; i++) {
                c1Mean += (i * probability[i]) / c1Weight;
            }
            for(var i = t + 1; i < 256; i++) {
                c2Mean += (i * probability[i]) / c2Weight;
            }

            //varianzas clase 1 y 2
            var c1Var = 0; 
            var c2Var = 0;
            for(var i = 0; i < t; i++) {
                c1Var += ((i - c1Mean)**2) * (probability[1] / c1Weight);
            }
            for(var i = t + 1; i < 256; i++) {
                c2Var += ((i - c2Mean)**2) * (probability[1] / c2Weight);
			}
			
            var weightedVar = (c1Weight * c1Var) + (c2Weight * c2Var);
            if(weightedVar < minVar) {
                minVar = weightedVar;
                minThreshold = t;
            }
        }
		///////////////FIN OTSU//////////////////////////


		//Segmenta la imagen
		segmentedImage.loadPixels();
		for (let x = 0; x < segmentedImage.width; x++) {
			for (let y = 0; y < segmentedImage.height; y++) {
                var bright = p5.int(p5.brightness(p5.get(x, y)));
				if (bright <= minThreshold) {
                    segmentedImage.set(x, y, p5.color(0));
                } 
                else if (bright > minThreshold) {
                    segmentedImage.set(x, y, p5.color(255));
				}
			}
		}
		segmentedImage.updatePixels();
		p5.image(segmentedImage, img.width + 5, 0);

        // #############################
		p5.push();
		p5.stroke('red');
        p5.translate((img.width * 2) + 10, 0);
        
		for (var k = 0; k < img.width; k += 2) {
			var which = p5.int(p5.map(k, 0, img.width, 0, 255));
			var y = p5.map(hist[which], 0, p5.max(hist), img.height, 0);
			p5.line(k, img.height, k, y);
		}
		p5.pop();
	}

	if (typeof window !== "undefined") {
		const Sketch = loadable(() => import("react-p5"));
		return (
			<div className="ml-5 mr-5 my-3">
				<h1>Histograma y segmentación imagen en escala de grises y color</h1>
				<p>
					Para el proceso de segmentación se uso Thresholding usando el metodo
					de Otsu para el calculo automatico del valor umbral y el modelo de
					color HSV sobre la imagen para extraer el valor de intensidad del
					pixel, que es un valor entero entre 0 y (L - 1) siendo L el numero
					maximo que un pixel puede representar. Para este caso particular como
					la imagen esta a escala de grises, L toma un valor de 256; siendo 0
					negro puro y 255 blanco puro. Se hizo el analisis con una imagen a color 
					como resultado se tuvo una imagen segmentada menos precisa. Se presume
					que esto es porque la diferencia de los dos picos mas grandes del histograma
					de la imagen a color no es significativa y por lo tanto el metodo Otsu que funciona mejor
					con histogramas bimodales no se desempeña optimamente, si se desea observar el resultado 
					con imagen a color se puede cambiar en la parte de import imagen el nombre mujer por reg.
				</p>
				<Sketch className="d-flex justify-content-center"  setup={setup} preload={preload} />
				<h2>Referencias</h2>
				<ul>
					<li><a href="https://en.wikipedia.org/wiki/Image_segmentation">Segmentación</a></li>
					<li><a href="https://es.wikipedia.org/wiki/Modelo_de_color_HSV">Modelo de color HSV</a></li>
					<li><a href="https://es.wikipedia.org/wiki/M%C3%A9todo_del_valor_umbral">Metodo valor umbral</a></li>
					<li><a href="https://en.wikipedia.org/wiki/Otsu%27s_method">Metodo de Otsu</a></li>
					<li><a href="https://processing.org/examples/histogram.html">https://processing.org/examples/histogram.html</a></li>
					<li><a href="https://editor.p5js.org/ebenjmuse/sketches/HyPfeGkCZ">https://editor.p5js.org/ebenjmuse/sketches/HyPfeGkCZ</a></li>
					<li>Handbook of Image and Video Processing (Second Edition)</li>
					<li>
						Metz, M. (2018). Optimum Global Thresholding Using Otsu´s Method.
						https://github.com/Michael-Metz/image-processing/blob/master/otsus-method-paper.pdf
					</li>
					<li>
						Digital Image Processing (CS/ECE 545) Lecture 2: Histograms and
						Point Operations (Part 1)
					</li>
				</ul>
			</div>
		);
	} else {
		return null;
	}
};
