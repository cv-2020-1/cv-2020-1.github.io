var anchoLineaY = 2;
var anchoLineaX = 1;
var filas = 9;
var alturaCelda = 26;
var anchoCelda = 30;

function setup() {
  createCanvas(400, (alturaCelda + anchoLineaY) * filas + anchoLineaY);
  background('#888');
  smooth();
}

function draw() {
  background('#888');
  for (var i = 0; i < filas; i++) {
    drawRow(i);
  }
}

function drawRow(fila) {
  yPos = fila * (alturaCelda + anchoLineaY) + anchoLineaY;
  numCells = Math.ceil(400 / anchoCelda) + 3;
  for (var i = -80; i < numCells; i++) {
    if (i % 2 == 0) {
      fill(0);
    } else {
      fill('#fff');
    }
    noStroke();
    var pos = fila % 4;
    if (pos == 3) pos = 1;
    rect(i * (anchoCelda + anchoLineaX) - pos * mouseX / 15 % (2 * anchoCelda) + 15,
      yPos,
      anchoCelda,
      alturaCelda
    );
  }
}