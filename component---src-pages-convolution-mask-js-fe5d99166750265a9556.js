(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+lfq":function(e,t,n){e.exports=n.p+"static/boxblur-0b3f8e36ceaf1f8d451bfe460159dbab.png"},"6oQD":function(e,t,n){e.exports=n.p+"static/fuego-15df1985b6d383a48079c4d3db3154d0.jpg"},LTqz:function(e,t,n){e.exports=n.p+"static/shader-edge-366855548d30306cfe95112fc3e68bcb.png"},OrPj:function(e,t,n){"use strict";n.r(t);n("q4sD"),n("q1tI");var c,r=n("MKeS"),a=n("bUxw"),l=n("QK+c"),o=n("rBaf"),i=n("6oQD"),s=n.n(i),u=n("+lfq"),d=n.n(u),p=n("abM1"),g=n.n(p),v=n("gwRz"),f=n.n(v),x=n("LTqz"),b=n.n(x),m=n("nVAN"),h=n.n(m),O=n("qKvR");t.default=function(e){if("undefined"!=typeof window){var t=Object(r.a)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.t.bind(null,"ixhd",7))}));return Object(O.d)("div",{className:"ml-5 mr-5 my-3"},Object(O.d)("h1",null,"MASCARAS DE CONVOLUCIÓN"),Object(O.d)("hr",{className:"my-3"}),Object(O.d)("p",{className:"mb-4 text-justify",style:{fontSize:"20px",width:"60%"}},"En esta sección implementamos las mascaras de convolución para una imagen aplicando 3 tipos de kernels",Object(O.d)("strong",null,"la imagen #1 (esquina superior izquierda)")," es la imagen original, la ",Object(O.d)("strong",null,"imagen #2 (esquina superior derecha)")," es la imagen con el kernel de detección de bordes,",Object(O.d)("strong",null,"la imagen #3 (esquina inferior izquierda)")," es la imagen con un kernel BoxBlur, y la ",Object(O.d)("strong",null,"imagen #4 (esquina inferior derecha)")," es la imagen con el kernel Sharpen."),Object(O.d)(t,{setup:function(e,t){e.createCanvas(800,500).parent(t),e.resizeCanvas(t.clientWidth,1e3,!1),e.noLoop()},draw:function(e){e.background(0),c.loadPixels(),e.image(c,0,0,e.width/2,e.height/2),e.image(Object(a.a)(e,c,l.b),e.width/2,0,e.width/2,e.height/2),e.image(Object(a.a)(e,c,l.a),0,e.height/2,e.width/2,e.height/2),e.image(Object(a.a)(e,c,l.c),e.width/2,e.height/2,e.width/2,e.height/2)},preload:function(e){c=e.loadImage(s.a)}}),Object(O.d)("br",null),Object(O.d)("h2",null,"CODIGO"),Object(O.d)(o.a,{code:"---Archivo React.js\nconst preload = (p5) => {\n  img = p5.loadImage(fuego);\n}\n\nconst setup = (p5, canvasParentRef) => {       \n  canvas = p5.createCanvas(800, 500)\n  canvas.parent(canvasParentRef)    \n  p5.resizeCanvas(canvasParentRef.clientWidth, 500*2, false);\n  p5.noLoop();\n}\n\nconst draw = (p5) => {\n  p5.background(0)\n  img.loadPixels();\n  p5.image(img,0,0, p5.width/2, p5.height/2)\n  p5.image(convolution(p5, img, EdgeDetectionKernel),p5.width/2,0, p5.width/2, p5.height/2);\n  p5.image(convolution(p5, img, BoxBlurKernel),0,p5.height/2, p5.width/2, p5.height/2);\n  p5.image(convolution(p5, img, SharpenKernel),p5.width/2,p5.height/2, p5.width/2, p5.height/2);  \n}\nreturn (\n  <Sketch setup={setup} draw={draw} preload={preload}/>\n)\n"}),Object(O.d)(o.a,{code:"---Algoritmo Convolución en P5.js\nconst blur = 1.0 / 9.0;\nconst blur_gaussian = 1.0/16.0;\n\nconst BoxBlurKernel = [[ blur, blur, blur ], [ blur, blur, blur ], [ blur, blur, blur ]];   \nconst GaussianBlurKernel = [[1*blur_gaussian,2*blur_gaussian,1*blur_gaussian],[2*blur_gaussian,4*blur_gaussian,2*blur_gaussian],[1*blur_gaussian,2*blur_gaussian,1*blur_gaussian]];\nconst SharpenKernel = [[0, -1, 0],[-1, 5, -1],[0,-1,0]];\nconst EdgeDetectionKernel = [[-1, -1 , -1],[-1, 8, -1],[-1, -1, -1]];\n\nconst convolution = (p5, img, kernel) => {\n    let copyImg = p5.createImage(img.width, img.height);\n    copyImg.loadPixels();\n\n    for(var x = 1; x < img.width - 1; ++x){\n        for(var y = 1; y < img.height - 1; ++y){\n            let loc = (x + y*img.width) * 4;\n            let convol_rgb = kernelProduct(img, x, y, kernel);\n\n            copyImg.pixels[loc] = convol_rgb[0];\n            copyImg.pixels[loc+1] = convol_rgb[1];\n            copyImg.pixels[loc+2] = convol_rgb[2];\n            copyImg.pixels[loc+3] = p5.alpha(1);            \n        }        \n    }\n      \n    copyImg.updatePixels();\n    return copyImg;    \n}\n\nfunction kernelProduct(img, x, y, kernel){\n    var red_channel = 0.0;\n    var green_channel = 0.0;\n    var blue_channel = 0.0;\n    for(var i = -1; i <= 1; ++i){\n      for(var j = -1; j <= 1; ++j){\n        let loc = ((x+i) + (y+j)*img.width)*4;\n\n         red_channel += kernel[i+1][j+1] * img.pixels[loc];\n         green_channel += kernel[i+1][j+1] * img.pixels[loc + 1];\n         blue_channel += kernel[i+1][j+1] * img.pixels[loc + 2];\n      }\n    }\n    return [parseInt(red_channel), parseInt(green_channel), parseInt(blue_channel)];\n  }\n\n  export default convolution;\n"}),Object(O.d)("br",null),Object(O.d)("h2",null,"KERNEL BOX BLUR"),Object(O.d)("p",{className:"text-justify",style:{fontSize:"20px",width:"60%"}},"Un Box Blur es un filtro lineal en el que cada pixel resulta del promedio de sus vecinos tomando un kernel de 3x3"),Object(O.d)("img",{src:d.a,alt:"boxblur"}),Object(O.d)("br",null),Object(O.d)("h2",null,"KERNEL EDGE DETECTION"),Object(O.d)("p",{className:"text-justify",style:{fontSize:"20px",width:"60%"}},"Edge Detection es una técnica de procesamiento de imágenes para encontrar los puntos de cambio drastico del brillo en una imagen"),Object(O.d)("img",{src:g.a,alt:"edgeimage"}),Object(O.d)("br",null),Object(O.d)("h2",null,"KERNEL SHARPEN"),Object(O.d)("p",{className:"text-justify",style:{fontSize:"20px",width:"60%"}},"Sharpen es un efecto que se aplica a las imágenes para darles una apariencia más nítida."),Object(O.d)("img",{src:f.a,alt:"sharpen"}),Object(O.d)("br",null),Object(O.d)("h1",null,"CONVOLUCIÓN POR HARDWARE con SHADERS"),Object(O.d)("p",{className:"text-justify",style:{fontSize:"20px",width:"60%"}},"Debido a dificultades en la implementación de shaders con p5 decidimos utilizar Processing para estos aplicandolo a 2 tipos de kernels: Edge Detection y Sharpen"),Object(O.d)("img",{src:b.a,alt:"edge"}),Object(O.d)("img",{src:h.a,alt:"sharpen"}),Object(O.d)("br",null),Object(O.d)(o.a,{code:"---Archivo frag.glsl\nuniform sampler2D texture;\nuniform vec2 texOffset;\n\nvarying vec4 vertColor;\nvarying vec4 vertTexCoord;\n\nvoid main() {\n  vec2 tc0 = vertTexCoord.st + vec2(-texOffset.s, -texOffset.t);\n  vec2 tc1 = vertTexCoord.st + vec2(         0.0, -texOffset.t);\n  vec2 tc2 = vertTexCoord.st + vec2(+texOffset.s, -texOffset.t);\n  vec2 tc3 = vertTexCoord.st + vec2(-texOffset.s,          0.0);\n  vec2 tc4 = vertTexCoord.st + vec2(         0.0,          0.0);\n  vec2 tc5 = vertTexCoord.st + vec2(+texOffset.s,          0.0);\n  vec2 tc6 = vertTexCoord.st + vec2(-texOffset.s, +texOffset.t);\n  vec2 tc7 = vertTexCoord.st + vec2(         0.0, +texOffset.t);\n  vec2 tc8 = vertTexCoord.st + vec2(+texOffset.s, +texOffset.t);\n  \n  vec4 col0 = texture2D(texture, tc0);\n  vec4 col1 = texture2D(texture, tc1);\n  vec4 col2 = texture2D(texture, tc2);\n  vec4 col3 = texture2D(texture, tc3);\n  vec4 col4 = texture2D(texture, tc4);\n  vec4 col5 = texture2D(texture, tc5);\n  vec4 col6 = texture2D(texture, tc6);\n  vec4 col7 = texture2D(texture, tc7);\n  vec4 col8 = texture2D(texture, tc8);\n\n  vec4 sum = - (col1 + col3 + col5 + col7) + 5 * col4;\n  \n  gl_FragColor = vec4(sum.rgb, 1.0) * vertColor;\n}\n"}),Object(O.d)(o.a,{code:"---Archivo frag.glsl\nuniform sampler2D texture;\nuniform vec2 texOffset;\n\nvarying vec4 vertColor;\nvarying vec4 vertTexCoord;\n\nvoid main() {\n  vec2 tc0 = vertTexCoord.st + vec2(-texOffset.s, -texOffset.t);\n  vec2 tc1 = vertTexCoord.st + vec2(         0.0, -texOffset.t);\n  vec2 tc2 = vertTexCoord.st + vec2(+texOffset.s, -texOffset.t);\n  vec2 tc3 = vertTexCoord.st + vec2(-texOffset.s,          0.0);\n  vec2 tc4 = vertTexCoord.st + vec2(         0.0,          0.0);\n  vec2 tc5 = vertTexCoord.st + vec2(+texOffset.s,          0.0);\n  vec2 tc6 = vertTexCoord.st + vec2(-texOffset.s, +texOffset.t);\n  vec2 tc7 = vertTexCoord.st + vec2(         0.0, +texOffset.t);\n  vec2 tc8 = vertTexCoord.st + vec2(+texOffset.s, +texOffset.t);\n  \n  vec4 col0 = texture2D(texture, tc0);\n  vec4 col1 = texture2D(texture, tc1);\n  vec4 col2 = texture2D(texture, tc2);\n  vec4 col3 = texture2D(texture, tc3);\n  vec4 col4 = texture2D(texture, tc4);\n  vec4 col5 = texture2D(texture, tc5);\n  vec4 col6 = texture2D(texture, tc6);\n  vec4 col7 = texture2D(texture, tc7);\n  vec4 col8 = texture2D(texture, tc8);\n\n  vec4 sum = 8.0 * col4 - (col0 + col1 + col2 + col3 + col5 + col6 + col7 + col8); \n  gl_FragColor = vec4(sum.rgb, 1.0) * vertColor; \n}\n"}),Object(O.d)("br",null),Object(O.d)("h2",null,"CONCLUSIONES"),Object(O.d)("ul",{className:"mb-5"},Object(O.d)("li",null,"1) Aunque apliquemos kernels habran algunas imagenes cuya imagen resultante sea dificil diferenciar de la original a simple vista"),Object(O.d)("li",null,"2) Con Variar solo uno de los numeros del kernel se pueden obtener resultados muy distintos"),Object(O.d)("li",null,"3) Si aplicamos cualquiera de los filtros desde processing o p5 usando Shaders la velocidad con que renderizo la imagen o inclusive un video es muy superior")),Object(O.d)("br",null),Object(O.d)("h2",null,"REFERENCIAS"),Object(O.d)("a",{href:"https://en.wikipedia.org/wiki/Kernel_(image_processing)"},"https://en.wikipedia.org/wiki/Kernel_(image_processing)"),Object(O.d)("br",null),Object(O.d)("a",{href:"https://www.slrlounge.com/glossary/image-sharpening-definition/"},"https://www.slrlounge.com/glossary/image-sharpening-definition/"),Object(O.d)("br",null),Object(O.d)("br",null),Object(O.d)("br",null))}return null}},"QK+c":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a}));var c=[[1/9,1/9,1/9],[1/9,1/9,1/9],[1/9,1/9,1/9]],r=[[0,-1,0],[-1,5,-1],[0,-1,0]],a=[[-1,-1,-1],[-1,8,-1],[-1,-1,-1]]},abM1:function(e,t,n){e.exports=n.p+"static/edgedetection-65d0d7fc922dd65f11a0858295205535.png"},bUxw:function(e,t,n){"use strict";function c(e,t,n,c){for(var r=0,a=0,l=0,o=-1;o<=1;++o)for(var i=-1;i<=1;++i){var s=4*(t+o+(n+i)*e.width);r+=c[o+1][i+1]*e.pixels[s],a+=c[o+1][i+1]*e.pixels[s+1],l+=c[o+1][i+1]*e.pixels[s+2]}return[parseInt(r),parseInt(a),parseInt(l)]}t.a=function(e,t,n){var r=e.createImage(t.width,t.height);r.loadPixels();for(var a=1;a<t.width-1;++a)for(var l=1;l<t.height-1;++l){var o=4*(a+l*t.width),i=c(t,a,l,n);r.pixels[o]=i[0],r.pixels[o+1]=i[1],r.pixels[o+2]=i[2],r.pixels[o+3]=e.alpha(1)}return r.updatePixels(),r}},gwRz:function(e,t,n){e.exports=n.p+"static/sharpen-13f80781cff70f254e0fe22d0b53c581.png"},nVAN:function(e,t,n){e.exports=n.p+"static/shader-sharpen-a8793aad420292ce512a49a542a572ae.png"},q4sD:function(e,t,n){},rBaf:function(e,t,n){"use strict";n("q4sD"),n("q1tI"),n("MKeS");var c=n("qKvR");t.a=function(e){return Object(c.d)("pre",{className:"bg-light"},e.code)}}}]);
//# sourceMappingURL=component---src-pages-convolution-mask-js-fe5d99166750265a9556.js.map