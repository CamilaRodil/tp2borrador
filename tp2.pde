int tamX, tamY;
int cant = 14;
int j = 0;
int i = 0;
PImage img;

void setup() {
  size(800, 400);
  //background(220);
  tamX = width/cant;
  tamY = height/cant;
  noFill();
  noStroke();
  img= loadImage("julio-le-parc-surface-couleur.jpg");
}

void draw() {
  elDist();
  fondo();
  circulos();  
image(img, 0, 0);
}

void mouseClicked() {
  if (mouseButton == LEFT && mouseX > width/2) {
    cant--;
  }
  if (mouseButton == RIGHT && mouseX > width/2) {
    cant++;
  }
}

 
void keyPressed() {
  if (cant == 1) {
    cant = 15;
  } else {
    cant = 14;
  }
} 
