function mousePressed() {
  if (activo === "comenzar") {
    if (mouseX > 550 && mouseX < 850 && mouseY > 470 && mouseY < 500) {
      activo = "Juego";
    }
  }
}

function JugadorLimite() {
  if (jugadorX >= limiteX) {
    bounds += 1;
    jugadorX = 50;
    if (bounds == 2) {
      bounds = 0;
    }
  }
  if (bounds > 0) {
    if (jugadorX <= 0 + jugadorAncho / 2) {
      bounds -= 1;
      jugadorX = width - 100;
    }
  }
}

function lasImagenes(){
  if (bounds==1) {
    image(fondo1, 0, fondoX, width, height);
    image(fondo, 0, fondoX, width, height);
    if (frameCount% 210<150) {
      image(cocodrilos, 380, 540);
    } else {
      image(cocodrilos1, 380, 535);
    }
  } else {
    image(fondo, 0, fondoX, width, height);
    image(fondo1, 0, fondoX, width, height);
    tronco(1150, 530);
    subirEscalera(width/2-100, plataformaY, 100, 200);
  }
}

function puntajeYlasVidas(){
  textFont(fuente); // Establecer la fuente cargada
  textSize(70);
  fill(255);
  text(`${puntaje}`, 300, 90);

  for (let i = 0; i < vidas; i++) {
    text("|", x+i*50, y);
  }
if(activo){
  let tiempoTranscurrido = floor(frameCount / 60); // 60 cuadros por segundo
  minutos = 1- floor(tiempoTranscurrido / 60);
  segundos = 59 - (tiempoTranscurrido % 60);
  }
  // Mostrar el tiempo
  if (minutos >= 0 && segundos >= 0) {
    text(`${minutos}:${segundos < 10 ? '0' : ''}${segundos}`,230,170);
  } else {
    text("Tiempo agotado /n apreta R para reinciar", 230, 190);   
  }
}

function Cocodrilos(){
  if (bounds==0) {
    if (verificarColision(jugadorX, jugadorY, jugadorAncho, jugadorAltura, plataformaX/2-30, plataformaY, plataformaAncho/2-80, plataformaAltura)) {
      estaSaltando = false;
      jugadorVelocidadY = 0;
      jugadorY = plataformaY - jugadorAltura / 2;
    }
    if (verificarColision(jugadorX, jugadorY, jugadorAncho, jugadorAltura, plataformaX+plataformaX/2, plataformaY, plataformaAncho/2-50, plataformaAltura)) {
      estaSaltando = false;
      jugadorVelocidadY = 0;
      jugadorY = plataformaY - jugadorAltura / 2;
    }
    if (verificarColision(jugadorX, jugadorY, jugadorAncho, jugadorAltura, plataformaX, height-10, plataformaAncho, plataformaAltura)) {
      estaSaltando = false;
      jugadorVelocidadY = 0;
      jugadorY = height-10 - jugadorAltura / 2;
    }
  } else {

    if (verificarColision(jugadorX, jugadorY, jugadorAncho, jugadorAltura, plataformaX/4, plataformaY, plataformaAncho/4, plataformaAltura)) {
      estaSaltando = false;
      jugadorVelocidadY = 0;
      jugadorY = plataformaY - jugadorAltura / 2;
    }
    if (verificarColision(jugadorX, jugadorY, jugadorAncho, jugadorAltura, plataformaX+plataformaX/2+plataformaX/4, plataformaY, plataformaAncho/4, plataformaAltura)) {
      estaSaltando = false;
      jugadorVelocidadY = 0;
      jugadorY = plataformaY - jugadorAltura / 2;
    }
      if (frameCount% 210<150) {
      if (verificarColision(jugadorX, jugadorY, jugadorAncho, jugadorAltura, plataformaX-10, plataformaY, 100, plataformaAltura)) {
        estaSaltando = false;
        jugadorVelocidadY = 0;
        jugadorY = plataformaY - jugadorAltura / 2;
      }

        if (verificarColision(jugadorX, jugadorY, jugadorAncho, jugadorAltura, plataformaX-plataformaX/4, plataformaY, 100, plataformaAltura)) {
        estaSaltando = false;
        jugadorVelocidadY = 0;
        jugadorY = plataformaY - jugadorAltura / 2;
      }

        if (verificarColision(jugadorX, jugadorY, jugadorAncho, jugadorAltura, plataformaX+plataformaX/4-20, plataformaY, 100, plataformaAltura)) {
        estaSaltando = false;
        jugadorVelocidadY = 0;
        jugadorY = plataformaY - jugadorAltura / 2;
      }
      
  
    }else{
    if (verificarColision(jugadorX, jugadorY, jugadorAncho, jugadorAltura, plataformaX-10, plataformaY, 100, plataformaAltura)) {
        estaSaltando = false;
        vidas--;
        jugadorX=100;
        jugadorY= height - 240 - 100;
      }

        if (verificarColision(jugadorX, jugadorY, jugadorAncho, jugadorAltura, plataformaX-plataformaX/4, plataformaY, 100, plataformaAltura)) {
        estaSaltando = false;
        vidas--;
        jugadorX=100;
        jugadorY= height - 240 - 100;
      }

        if (verificarColision(jugadorX, jugadorY, jugadorAncho, jugadorAltura, plataformaX+plataformaX/4-20, plataformaY, 100, plataformaAltura)) {
        estaSaltando = false;
        vidas--;
        jugadorX=100;
        jugadorY= height - 240 - 100;
      }
    }
    if (verificarColision(jugadorX, jugadorY, jugadorAncho, jugadorAltura, plataformaX, height-20, plataformaAncho, plataformaAltura)) {
      estaSaltando = false;
      jugadorVelocidadY = 0;
      jugadorY = height-20 - jugadorAltura / 2;
    }
   }
  }


function tronco(x, y) {
  image(tronco1, x, y);
  if (colisionGenerica(x+5, y+5, 70, 75, jugadorX-jugadorAncho/2, jugadorY-jugadorAltura/2, jugadorAncho, jugadorAltura)) {
    if (frameCount%2==0) {
      puntaje-=1;
    }
  }
}

let escalera=false;
function subirEscalera(x, y, tamX, tamY) {
  if (colisionGenerica(x, y, tamX, tamY, jugadorX-jugadorAncho/2, jugadorY-jugadorAltura/2, jugadorAncho, jugadorAltura)) {
    escalera=true;
  } else {
    escalera=false;
  }
}

function colisionGenerica(x, y, tamX, tamY, x2, y2, tamX2, tamY2) {
  let resultado=(x2<x+tamX && x2+tamX2>x && y2<y+tamY && y2+tamY2>y)
    return resultado;
  }


function keyPressed() {
  if (key === ' ' && !estaSaltando) { // Barra espaciadora para saltar
    saltar();
  }
  if (keyCode === RIGHT_ARROW) {
    mover("x",6);
    direccion="derecha"
  } else if (keyCode === LEFT_ARROW) {
    mover("x",-6);
    direccion="izquierda"
  }
  if(escalera){
  if (keyCode === UP_ARROW) {
    mover("y",-10);
   
  } else if (keyCode === DOWN_ARROW) {
        mover("y",10);
  }
  }
  if(key=='r'){
  setDefault()
  }
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
    mover("x",0);
  }
  if(keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
    mover("y",0);
  }
}

function saltar() {
  jugadorVelocidadY = -16;
  estaSaltando = true;
}

function mover(direccion,velocidad) {
  switch(direccion){
    case "x":
  jugadorVelocidadX = velocidad;
  break;
  case "y":
  jugadorVelocidadY= velocidad;
  break;
  }
}

function verificarColision(x1, y1, ancho1, altura1, x2, y2, ancho2, altura2) {
  return (
    x1 + ancho1 / 2 > x2 - ancho2 / 2 &&
    x1 - ancho1 / 2 < x2 + ancho2 / 2 &&
    y1 + altura1 / 2 > y2 - altura2 / 2 &&
    y1 - altura1 / 2 < y2 + altura2 / 2
  );
}

function mostrarJugador() {
  let spriteIndex = floor(frameCount / 10) % jugador.length;
  if (jugadorVelocidadX > 0) {
    image (jugador[spriteIndex], jugadorX - jugadorAncho / 2, jugadorY - jugadorAltura / 2, jugadorAncho, jugadorAltura);
  } else if (jugadorVelocidadX < 0) {
    push();
    translate(jugadorX, jugadorY - jugadorAltura / 2);
    scale(-1, 1);
    image (jugador[spriteIndex], -jugadorAncho / 2, 0, jugadorAncho, jugadorAltura);
    pop();
  } else {
    if (direccion=="derecha") {
      image (jugador[0], jugadorX - jugadorAncho / 2, jugadorY - jugadorAltura / 2, jugadorAncho, jugadorAltura);
    } else {
      push();
      translate(jugadorX , jugadorY - jugadorAltura / 2);
      scale(-1, 1);
      image (jugador[0], -jugadorAncho / 2, 0, jugadorAncho, jugadorAltura);
      pop();
    }
  }
}
