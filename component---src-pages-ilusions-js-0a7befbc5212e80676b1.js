(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"Q9+V":function(e,n,l){"use strict";l.r(n);l("q1tI"),l("q4sD");var i=l("MKeS"),a=l("qKvR");function t(){var e,n,t,r;if("undefined"!=typeof window){var s=Object(i.a)((function(){return Promise.all([l.e(0),l.e(1)]).then(l.t.bind(null,"ixhd",7))}));return Object(a.d)(s,{className:"d-flex justify-content-center",setup:function(e,n){e.createCanvas(720,400).parent(n),e.createP("Keep the mouse clicked").style("color","#ffffff"),e.createP("to check whether the bricks").style("color","#ffffff"),e.createP("are moving at same speed or not").style("color","#ffffff"),t=0,r=1},draw:function(l){if(l.background(255),l.mouseIsPressed&&l.background(100),((t+=r)+100>=l.width||t<=0)&&(r*=-1),!l.mouseIsPressed)for(var i=0;i<l.width/12;i++){if(i%2==0)l.rect(12*i,l.height,12,-l.height).fill("black")}(e=l.rect(t,100,100,50)).fill("white"),e.stroke("white"),e.xSpeed=r,(n=l.rect(t,250,100,50)).fill("black"),n.stroke("black"),n.xSpeed=r}})}return null}function r(){if("undefined"!=typeof window){var e=Object(i.a)((function(){return Promise.all([l.e(0),l.e(1)]).then(l.t.bind(null,"ixhd",7))}));return Object(a.d)(e,{className:"d-flex justify-content-center",setup:function(e,n){e.createCanvas(400,254).parent(n),e.smooth()},draw:function(e){e.background("#888");for(var n=0;n<9;n++)for(var l=28*n+2,i=Math.ceil(400/30)+3,a=-80;a<i;a++){a%2==0?e.fill(0):e.fill("#fff"),e.noStroke();var t=n%4;3===t&&(t=1),e.rect(31*a-t*e.mouseX/15%60+15,l,30,26)}}})}return null}function s(){if("undefined"!=typeof window){var e=Object(i.a)((function(){return Promise.all([l.e(0),l.e(1)]).then(l.t.bind(null,"ixhd",7))}));return Object(a.d)(e,{className:"d-flex justify-content-center",setup:function(e,n){e.createCanvas(600,400).parent(n)},draw:function(e){e.background(220);var n=e.map(e.mouseX,0,e.width,200,0);e.noStroke(),e.fill("yellow"),e.ellipse(160,200,50,50),e.fill(155,0,215,n),e.ellipse(110,120,90,90),e.ellipse(210,120,90,90),e.ellipse(110,280,90,90),e.ellipse(210,280,90,90),e.ellipse(60,200,90,90),e.ellipse(260,200,90,90),e.fill("yellow"),e.ellipse(450,200,50,50),e.fill(155,0,215,n),e.ellipse(450,154,25,25),e.ellipse(450,246,25,25),e.ellipse(400,200,25,25),e.ellipse(500,200,25,25),e.ellipse(415,235,25,25),e.ellipse(485,235,25,25),e.ellipse(415,164,25,25),e.ellipse(485,164,25,25)}})}return null}function o(){if("undefined"!=typeof window){var e=Object(i.a)((function(){return Promise.all([l.e(0),l.e(1)]).then(l.t.bind(null,"ixhd",7))}));return Object(a.d)(e,{className:"d-flex justify-content-center",setup:function(e,n){e.createCanvas(400,400).parent(n),e.strokeWeight(3),e.smooth(),e.stroke(100,100,100),e.noLoop()},draw:function(e){e.background(0);for(var n=25;n<e.width;n+=25)e.line(n,0,n,e.height);for(var l=25;l<e.height;l+=25)e.line(0,l,e.width,l);e.ellipseMode(e.CENTER),e.stroke(255,255,255);for(var i=25;i<e.width-5;i+=25)for(var a=25;a<e.height-15;a+=25)e.strokeWeight(6),e.point(i,a),e.strokeWeight(3)}})}return null}function c(){var e=0,n=5;if("undefined"!=typeof window){var t=Object(i.a)((function(){return Promise.all([l.e(0),l.e(1)]).then(l.t.bind(null,"ixhd",7))}));return Object(a.d)(t,{className:"d-flex justify-content-center",setup:function(e,n){e.createCanvas(400,400).parent(n),e.background(220)},draw:function(l){l.line(0,e,n,400),e+=5,n+=5}})}return null}n.default=function(){return Object(a.d)("div",{className:"ml-5 mr-5 my-3"},Object(a.d)("div",null,Object(a.d)("h1",null,"Ilusiones"),Object(a.d)("h2",null,"Cafe Wall"),Object(a.d)("p",null,"La ilusión de la pared de la cafetería es un tipo de ilusión óptico-geométrica, en la que líneas rectas paralelas que dividien líneas entre filas formadas por baldosas blancas y negras alternas y escalonadas, aparentan estar inclinadas."),Object(a.d)(r,null),Object(a.d)("h2",null,"Ebbinghaus"),Object(a.d)("p",null,"La ilusión de Ebbinghaus es una ilusión óptica que altera la percepción de las dimensiones relativas. En la versión más conocida de la ilusión, dos círculos de la misma medida son colocados cercanos uno a otro y son circundados, uno por círculos de un tamaño mayor y el otro por círculos de menor tamaño; el primer círculo central parecerá más pequeño que el otro"),Object(a.d)(s,null),Object(a.d)("h2",null,"Grid"),Object(a.d)("p",null,'La ilusión de cuadrícula de Hermann es una ilusión óptica descrita por Ludimar Hermann en 1870. La ilusión se caracteriza por manchas grises "fantasmales" que se perciben en las intersecciones de una cuadrícula blanca (o de color claro) sobre un fondo negro. Las manchas grises desaparecen al mirar directamente a una intersección.'),Object(a.d)(o,null),Object(a.d)("h2",null,"Stepping feet"),Object(a.d)("p",null,"La ilusión de los pasos es un experimento psicológico muy famoso. Ambos bloques parecen moverse a velocidades diferentes, pero en realidad se mueven a la misma velocidad. Haz click con el ratón para confirmar que se mueven a la misma velocidad."),Object(a.d)(t,null),Object(a.d)("h2",null,"Bézier curve"),Object(a.d)("p",null,"Se denomina curvas de Bézier a un sistema que se desarrolló hacia los años 1960 para el trazado de dibujos técnicos, en el diseño aeronáutico y en el de automóviles. Su denominación es en honor a Pierre Bézier, quien ideó un método de descripción matemática de las curvas que se comenzó a utilizar con éxito en los programas de CAD."),Object(a.d)(c,null),Object(a.d)("h2",null,"Referencias"),Object(a.d)("ul",null,Object(a.d)("li",null,Object(a.d)("a",{href:"https://www.illusionsindex.org/i/cafe-wall-illusion"},"Cafe Wall")),Object(a.d)("li",null,Object(a.d)("a",{href:"https://es.wikipedia.org/wiki/Ilusi%C3%B3n_de_Ebbinghaus"},"Ebbinghaus")),Object(a.d)("li",null,Object(a.d)("a",{href:"https://en.wikipedia.org/wiki/Grid_illusion"},"Grid Illusion")),Object(a.d)("li",null,Object(a.d)("a",{href:"https://en.wikipedia.org/wiki/Stepping_feet_illusion"},"Stepping feet illusion")),Object(a.d)("li",null,Object(a.d)("a",{href:"https://en.wikipedia.org/wiki/B%C3%A9zier_curve"},"Bézier curve")))))}},q4sD:function(e,n,l){}}]);
//# sourceMappingURL=component---src-pages-ilusions-js-0a7befbc5212e80676b1.js.map