const code = `---Algoritmo Convolución en P5.js
const blur = 1.0 / 9.0;
const blur_gaussian = 1.0/16.0;

const BoxBlurKernel = [[ blur, blur, blur ], [ blur, blur, blur ], [ blur, blur, blur ]];   
const GaussianBlurKernel = [[1*blur_gaussian,2*blur_gaussian,1*blur_gaussian],[2*blur_gaussian,4*blur_gaussian,2*blur_gaussian],[1*blur_gaussian,2*blur_gaussian,1*blur_gaussian]];
const SharpenKernel = [[0, -1, 0],[-1, 5, -1],[0,-1,0]];
const EdgeDetectionKernel = [[-1, -1 , -1],[-1, 8, -1],[-1, -1, -1]];

const convolution = (p5, img, kernel) => {
    let copyImg = p5.createImage(img.width, img.height);
    copyImg.loadPixels();

    for(var x = 1; x < img.width - 1; ++x){
        for(var y = 1; y < img.height - 1; ++y){
            let loc = (x + y*img.width) * 4;
            let convol_rgb = kernelProduct(img, x, y, kernel);

            copyImg.pixels[loc] = convol_rgb[0];
            copyImg.pixels[loc+1] = convol_rgb[1];
            copyImg.pixels[loc+2] = convol_rgb[2];
            copyImg.pixels[loc+3] = p5.alpha(1);            
        }        
    }
      
    copyImg.updatePixels();
    return copyImg;    
}

function kernelProduct(img, x, y, kernel){
    var red_channel = 0.0;
    var green_channel = 0.0;
    var blue_channel = 0.0;
    for(var i = -1; i <= 1; ++i){
      for(var j = -1; j <= 1; ++j){
        let loc = ((x+i) + (y+j)*img.width)*4;

         red_channel += kernel[i+1][j+1] * img.pixels[loc];
         green_channel += kernel[i+1][j+1] * img.pixels[loc + 1];
         blue_channel += kernel[i+1][j+1] * img.pixels[loc + 2];
      }
    }
    return [parseInt(red_channel), parseInt(green_channel), parseInt(blue_channel)];
  }

  export default convolution;
`
export default code;