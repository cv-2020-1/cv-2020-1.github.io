(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6oQD":function(e,a,i){e.exports=i.p+"static/fuego-15df1985b6d383a48079c4d3db3154d0.jpg"},"7oaS":function(e,a,i){"use strict";function n(e,a,i){return Math.max(e,a,i)+Math.min(e,a,i)/2}function t(e,a,i){return(e+a+i)/3}function s(e,a,i){return parseInt(.21*e+.72*a+.07*i)}a.a=function(e,a,i){a.loadPixels();var l="average";"average"==i?l=t:"ligthness"==i?l=n:"luminosity"==i&&(l=s);for(var c=1;c<a.width-1;++c)for(var u=1;u<a.height-1;++u){var r=4*(c+a.width*u),o=l(a.pixels[r],a.pixels[r+1],a.pixels[r+2]),d=e.color(o,o,o);a.pixels[r]=e.red(d),a.pixels[r+1]=e.green(d),a.pixels[r+2]=e.blue(d)}return a.updatePixels(),a}},"9YiN":function(e,a,i){"use strict";i.r(a);i("q1tI"),i("q4sD"),i("Vl0y");var n=i("MKeS"),t=i("6oQD"),s=i.n(t),l=i("7oaS"),c=i("qKvR");function u(e){var a=null;if("undefined"!=typeof window){var t=Object(n.a)((function(){return Promise.all([i.e(0),i.e(1)]).then(i.t.bind(null,"ixhd",7))}));return Object(c.d)(t,{setup:function(i,n){i.createCanvas(800,500).parent(n),i.image(Object(l.a)(i,a,e.technique),0,0,i.width,i.height)},draw:function(e){},preload:function(e){a=e.loadImage(s.a)}})}return null}a.default=function(){var e={backgroundColor:"white",padding:"20px"};return Object(c.d)("div",{className:"ml-5 mr-5 my-3"},Object(c.d)("div",null,Object(c.d)("h1",null,"Escala de Grises"),Object(c.d)("p",null,"A continuación se describen diferentes tecnicas que se pueden aplicar para conseguir transformar una imagen en escalda de grises."),Object(c.d)("h2",null,"Modificando los pixeles Grayscale"),Object(c.d)("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, consequatur repellendus? Magnam quasi pariatur voluptatum ipsum corporis sed animi, labore optio harum aut. Saepe deleniti vero aliquam libero maiores adipisci ipsum molestias? Esse nisi, rerum explicabo, officia cupiditate et temporibus earum suscipit asperiores necessitatibus amet itaque quibusdam iste quia obcaecati sint, aperiam ipsa fugit! Rerum, nobis. Corrupti sequi saepe vel accusantium natus, nihil quo officia at! Et, unde saepe nostrum doloremque sint repellat labore molestias corporis delectus reiciendis beatae possimus debitis alias, quas ullam accusamus voluptatum aperiam dolore animi in, natus recusandae cum aut a? Possimus praesentium architecto cum culpa."),Object(c.d)(u,{technique:"ligthness"}),Object(c.d)("h2",null,"Técnica del Promedio"),Object(c.d)("p",null,"Este proceso se basa en la estimación del la tonalidad de gris aplicando un promedio en los 3 canales que tiene cada uno de los pixeles presentes en la imagen.A continuación se muestra la formula que se utiliza para obtener el valor de gris con el cual quedara cada uno de los canales (RGB) en cada pixeles."),Object(c.d)("div",{background:"white"},Object(c.d)("img",{src:"http://latex.codecogs.com/svg.latex?pixel_%7Bcanal%7D%20=%20%5Cfrac%7Br%20&plus;%20g%20&plus;%20b%7D%7B3%7D",height:"100px",style:e})),Object(c.d)(u,{technique:"average"}),Object(c.d)("h2",null,"Conversión colorimétrica (preservación de la luminancia perceptiva) a escala de grises"," "),Object(c.d)("p",null,"Otra estrategía que se puede utilizar para que el ojo humano perciba una imagen en escala de grises es modificar la intesidad de luz que el ojo percibe en función del color que se esta observando. De esta manera podemos usar la siguiente acuación de la luminancia nos muestra la expresión matemática de ese fenómeno y los factores de ponderación de cada componente de color nos indican la sensibilidad del ojo humano a las frecuencias del espectro cercanas al rojo, verde y azul."),Object(c.d)("div",{background:"white"},Object(c.d)("img",{src:"http://latex.codecogs.com/svg.latex?pixel_%7Bcanal%7D%20=%20%5Cleft%20%5Clfloor%20%7B0.21*R_%7Bcanal%7D%20&plus;%200.72%20*G_%7Bcanal%7D%20&plus;%200.07%20*B_%7Bcanal%7D%7D%20%5Cright%20%5Crfloor",height:"100px",style:e})),Object(c.d)(u,{technique:"luminosity"}),Object(c.d)("h3",null,"Referencias"),Object(c.d)("ul",null,Object(c.d)("li",null,"https://www.uv.es/gpoei/eng/Pfc_web/generalidades/grises/grey.htm"),Object(c.d)("li",null,"https://en.wikipedia.org/wiki/Grayscale"),Object(c.d)("li",null,"https://www.dspace.espol.edu.ec/bitstream/123456789/10715/1/I.pdf"))))}},Vl0y:function(e,a,i){},q4sD:function(e,a,i){}}]);
//# sourceMappingURL=component---src-pages-grayscale-jsx-3d8917f83406b08e3d97.js.map