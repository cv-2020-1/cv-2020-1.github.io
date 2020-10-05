const code = `---Archivo React.js
//Calcula el histograma
for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
        var bright = p5.int(p5.brightness(p5.get(x, y)));
        hist[bright]++;
    }
}
hist = hist.map((x) => (x === 0 ? 1 : x));

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
`
export default code