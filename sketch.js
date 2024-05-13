//variaveis bola
let xbola = 300;
let ybola = 200;
let d = 30;
let r = d /2;
//velocidade bola
let Vbx = 6;
let Vby = 6;
//retangulo
let xret = 5
let yret = 150
let lret = 10
let tret = 90

let bateu = false

// retangulo oponente
let xreto = 585
let yreto = 150
let Vyreto

// placar do jogo
let mpnt = 0;
let opnt = 0;

// sons do jogo
let ponto;
let raquetada;

function preload() {
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  fill(0,255,0);
  background(0);
  bola();
  mexebola();
  quicabola();
  ret(xret, yret);
  mexeret();
  colideret(xret, yret);
  ret(xreto, yreto);
  //mexereto();
  colideret(xreto, yreto);
  placar();
  marcaPonto();
  outrojoga();
}

    function bola() {circle(xbola,ybola,d);
}

    function mexebola() { xbola += Vbx;
  ybola += Vby;}

    function quicabola() {if (xbola + r > width || xbola - r < 0){
    Vbx *= -1;
  }
  if (ybola + r > height || ybola - r < 0){
    Vby *= -1;
  }
}

    function ret(x, y) {
      rect(x, y, lret, tret)
    }

    function mexeret() {
  if (keyIsDown(UP_ARROW)) {
    yret -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yret += 10;
  }
}

    function colideret(x, y) {
      bateu =
      collideRectCircle(x, y, lret, tret, xbola, ybola, r);
    if (bateu) {
      Vbx *= -1
      raquetada.play();
    }
    }

    function mexereto() {
      Vyreto = ybola - yreto - lret /2 - 30;
      yreto += Vyreto 
    }

    function outrojoga() {
      if (keyIsDown(87)) {
    yreto -= 10;
  }
  if (keyIsDown(83)) {
    yreto += 10;
  }
}


    function placar() {
      textAlign(CENTER)
      textSize(14)
      stroke (0, 255, 0)
      strokeWeight (1)
      fill(0)
      rect (180, 10, 40, 20)
      stroke (0, 255, 0)
      strokeWeight (1)
      fill(0)
      rect (380, 10, 40, 20)
      fill (0, 255, 0)
      text(mpnt, 200, 26);
      text(opnt, 400, 26);
    }

    function marcaPonto() {
      if (xbola > 585) {
        mpnt += 1
        ponto.play();
      }
      if (xbola < 15) {
        opnt += 1
        ponto.play();
      }
    }