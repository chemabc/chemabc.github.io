//Funciones auxiliares para centrar el canvas en la pantalla:
let canvas, canvasDiv;
//Funcion para lograr la posicion absoluta de mi contenedor
function getPos(el) {
    // yay readability
    for (var lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return {x: lx,y: ly};
}

//Quiero que centre el canvas solo horizontaltmente
function centerCanvasDivHorizontally() {
  var xCenter = (windowWidth - width) / 2;
  var yCenter = (windowHeight - height) / 2;

  var posDiv = getPos(canvasDiv);
  /*console.log("Pos Div: ", posDiv);
  console.log("width: ", width);
  console.log("height: ", height);
  */
  //Hacemos que el canvas esté contenido en el div 'sketch'
  canvas.parent('sketch');
  //Aquí vamos a mover un poquito el sketch en horizontal hacia la izquierda para que quede centrado en la página. 
  moveToLeft = (xCenter - posDiv.x);
  canvasDiv.setAttribute("style","  margin: 0; padding: 0;  width:" + width + "px; height:" + height + "px; margin-left:" + moveToLeft + "px; overflow: hidden;");

}

function setup() {
  canvasDiv = document.getElementById('sketch');
  sWidth = windowWidth*3/4;
  sHeight = sWidth * 9 / 16;
  canvas = createCanvas(sWidth,sHeight);
  centerCanvasDivHorizontally();
}

function draw() {
  //Dibujo el borde del canvas:
  //background(0,0,0);
  fill(random(255), random(255), random(255));

}
function mouseMoved() {
	ellipse(mouseX, mouseY, 80, 80);
}
