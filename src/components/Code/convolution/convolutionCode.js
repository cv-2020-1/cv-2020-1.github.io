const code = `---Archivo React.js
const preload = (p5) => {
  img = p5.loadImage(fuego);
}

const setup = (p5, canvasParentRef) => {       
  canvas = p5.createCanvas(800, 500)
  canvas.parent(canvasParentRef)    
  p5.resizeCanvas(canvasParentRef.clientWidth, 500*2, false);
  p5.noLoop();
}

const draw = (p5) => {
  p5.background(0)
  img.loadPixels();
  p5.image(img,0,0, p5.width/2, p5.height/2)
  p5.image(convolution(p5, img, EdgeDetectionKernel),p5.width/2,0, p5.width/2, p5.height/2);
  p5.image(convolution(p5, img, BoxBlurKernel),0,p5.height/2, p5.width/2, p5.height/2);
  p5.image(convolution(p5, img, SharpenKernel),p5.width/2,p5.height/2, p5.width/2, p5.height/2);  
}
return (
  <Sketch setup={setup} draw={draw} preload={preload}/>
)
`
export default code