function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(220);
    let k = map(mouseX, 0, width, 200, 0)
  
    noStroke()
    fill('yellow')
    ellipse(160, 200, 50, 50)
  
    fill(155, 0, 215, k)
  
    ellipse(110, 120, 90, 90)
    ellipse(210, 120, 90, 90)
  
    ellipse(110, 280, 90, 90)
    ellipse(210, 280, 90, 90)
  
    ellipse(60, 200, 90, 90)
    ellipse(260, 200, 90, 90)
  
    fill('yellow')
    ellipse(450, 200, 50, 50)
  
    fill(155, 0, 215, k)
  
    ellipse(450, 154, 25, 25)
    ellipse(450, 246, 25, 25)
  
    ellipse(400, 200, 25, 25)
    ellipse(500, 200, 25, 25)
  
    ellipse(415, 235, 25, 25)
    ellipse(485, 235, 25, 25)
  
    ellipse(415, 164, 25, 25)
    ellipse(485, 164, 25, 25)
  
  }