

import React from "react";
import Sketch from "react-p5";
import imagen from "../assets/Puerto_de_Santander_en_1867_(J._Laurent).jpg";

export default () => {

    var img;
    var hist = new Array(256).fill(0);

    function preload(p5) {
        img = p5.loadImage(imagen);
    }

    function setup(p5, canvasParentRef) {
        p5.createCanvas(img.width, img.height).parent(canvasParentRef);
        p5.image(img, 0, 0);

        // Calcula el histograma
        for (let i = 0; i < img.width; i++) {
            for (let j = 0; j < img.height; j++) {
                var bright = parseInt(p5.brightness(p5.get(i, j)));
                hist[bright]++;
            }
        }

        // Encuentra el maximo valor del histograma
        var histMax = Math.max(...hist);
        
        p5.stroke('red');
        for (var k = 0; k < img.width; k += 2) {
            var which = parseInt(p5.map(k, 0, img.width, 0, 255));
            var y = parseInt(p5.map(hist[which], 0, histMax, img.height, 0));
            p5.line(k, img.height, k, y);
        }
    }

    return (
        <div className="ml-5 mr-5 my-3">
            <h1>Histograma de imagen</h1>
            <p>Aqui estamos probando realizar el histograma de imagen y la segmentacion</p>
            <Sketch setup={setup} preload={preload} />
        </div>
    )
};
