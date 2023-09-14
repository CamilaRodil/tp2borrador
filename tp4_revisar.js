let jugador = [];
let cantImagenes = 5;
let jugadorAncho = 60;
let jugadorAltura = 90;
let jugadorX = 100; // Debes inicializar estas variables
let jugadorY = 100; // con valores adecuados
let jugadorVelocidadX = 0;
let jugadorVelocidadY = 0;
let sueloX;
let sueloY;
let estaSaltando = false;
let plataformaX;
let plataformaY;
let plataformaAncho = 1468;
let plataformaAltura = 20;
let limiteX;
let puntaje = 200;
let fondo;
let fondo1;
let fondoX = 0; // Posición en el fondo
let segundos = 0;
let minutos = 1;
let fuente;
let bounds = 0;
let direccion;
let vidas = 3;
let contador = 2;
let x = 30;
let y = 100;
let tronco1;
let activo = "comenzar";
let PantallaDeInicio;

function preload() {
  for (let i = 1; i <= cantImagenes; i++) {
    jugador[i - 1] = loadImage("data/jugador" + i + ".png");
  }
  JugadorBaja1 = loadImage('data/baja1.png');
  JugadorBaja2 = loadImage('data/baja2.png');

  PantallaDeInicio = loadImage('data/PantallaDeInicio.png');
  // Debes cargar las otras imágenes aquí
  // Creditos = loadImage('data/Creditos.png');
  // Instrucciones = loadImage('data/Instrucciones.png');

  fondo1 = loadImage('data/fondo.png');
  fondo = loadImage('data/fondo1.png');

  cocodrilos = loadImage('data/cocodrilos.png');
  cocodrilos1 = loadImage('data/cocodrilos1.png');

  tronco1 = loadImage('data/tronco1.png');

  fuente = loadFont('data/PressStart2P-Regular.ttf');
}

function setup() {
  createCanvas(1468, 870);
  Pantalla1();
  // Asigna coordenadas iniciales válidas al jugador
  jugadorX = width / 2;
  jugadorY = height - 240 - jugadorAltura;
  //codigo viejo
  //jugadorX = 100;
  //jugadorY = height - 240 - 100;
  sueloY = height - 80;
  plataformaX = width / 2;
  plataformaY = height - 300;
  limiteX = width - jugadorAncho / 2;
}

function Pantalla1() {
  image(PantallaDeInicio, 0, 0);
  //rect(430,445,600,120);
}

function draw() {
  if (activo == "comenzar") {
    Pantalla1();
  } else {
    Juego();
  }
}
