const copyImage = (p5, img) => {
    let copyImg = p5.createImage(img.width, img.height);
    copyImg.loadPixels();

    for(var x = 0; x < img.width; ++x){
        for(var y = 0; y < img.height; ++y){
            let loc = (x + y*img.width) * 4;
            
            copyImg.pixels[loc] = p5.red(img.pixels[loc]);
            copyImg.pixels[loc+1] = p5.green(img.pixels[loc+1]);
            copyImg.pixels[loc+2] = p5.blue(img.pixels[loc+2]);
            copyImg.pixels[loc+3] = p5.alpha(1);
        }        
    }
      
    copyImg.updatePixels();
    return copyImg;    
}
  export default copyImage;