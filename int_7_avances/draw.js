function draw() {
 background(0);

if (jugadorX >= limiteX) {
    bounds+=1;
    jugadorX=50
  }
  if (bounds>0) {
    if (jugadorX <= 0+jugadorAncho/2) {
      bounds-=1;
      jugadorX=width-100;
    }
  }

  if (bounds==1) {
    image(fondo1,0, fondoX, width, height);
    image(fondo,0, fondoX, width, height);
    if (frameCount% 30>5) {
  image(cocodrilos, 380, 540);
  } else {
  image(cocodrilos1, 380, 535);
  }
  } else {   
    image(fondo,0, fondoX, width, height);
    image(fondo1,0, fondoX, width, height);
    image(tronco1, 1150, 530);  
    if (jugadorX==1150 && jugadorY==530) {
    puntaje--;
    }
}

  textFont(fuente); // Establecer la fuente cargada
  textSize(70);
  fill(255);
  text(`${puntaje}`, 300, 90);
 
for (let i = 0; i < vidas; i++) {
    text("||", x, y); 
  }

let tiempoTranscurrido = floor(frameCount / 60); // 60 cuadros por segundo
  minutos = 1- floor(tiempoTranscurrido / 60);
  segundos = 59 - (tiempoTranscurrido % 60);

  // Mostrar el tiempo
  if (minutos >= 0 && segundos >= 0) {
    text(`${minutos}:${segundos < 10 ? '0' : ''}${segundos}`,230,170);
  } else {
    text("Tiempo agotado",230,190);
  }

  actualizarJugador();
  mostrarJugador();

  if (verificarColision(jugadorX, jugadorY, jugadorAncho, jugadorAltura, plataformaX, plataformaY, plataformaAncho, plataformaAltura)) {
    estaSaltando = false;
    jugadorVelocidadY = 0;
    jugadorY = plataformaY - jugadorAltura / 2;
  }

}
