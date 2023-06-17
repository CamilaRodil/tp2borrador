int tamX, tamY;
int cant = 14;
int j = 0;
int i = 0;
int botonPosX, botonPosY;
PImage img;

void setup() {
  size(800, 400);
  botonPosX = 100;
  botonPosY = 100;
  //background(220);
  tamX = width/cant;
  tamY = height/cant;
  noFill();
  noStroke();
  img= loadImage("julio-le-parc-surface-couleur.jpg");
}

void draw() {
  dibujarBoton(botonPosX, botonPosY);
  if(hiceClickEnElBoton(botonPosX,botonPosY))
  //fondo();
  dibujarCirculos(14);  
 image(img, 0, 0);
}
void mouseClicked() {
  if (mouseButton == LEFT && mouseX > width/2) {
    cant++;
  }
 }
 


  
