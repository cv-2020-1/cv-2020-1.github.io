const averageGrayScale = (p5, img) => {
  //   let copyImg = p5.createImage(img.width, img.height)
  img.loadPixels()

  for (var x = 1; x < img.width - 1; ++x) {
    for (var y = 1; y < img.height - 1; ++y) {
      let loc = (x + img.width * y) * 4
      let average_rgb = average(
        img.pixels[loc],
        img.pixels[loc + 1],
        img.pixels[loc + 2]
      )

      img.pixels[loc] = p5.red(p5.color(average_rgb, average_rgb, average_rgb))
      img.pixels[loc + 1] = p5.green(
        p5.color(average_rgb, average_rgb, average_rgb)
      )
      img.pixels[loc + 2] = p5.blue(
        p5.color(average_rgb, average_rgb, average_rgb)
      )
    }
  }

  img.updatePixels()
  return img
}

function average(r, g, b) {
  return (r + g + b) / 3
}

export default averageGrayScale
