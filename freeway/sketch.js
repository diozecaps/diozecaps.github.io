
function setup() {
  createCanvas(500, 400);
  //trilhaSonora.loop();
}

function draw() {//desenha o jogo
  background(imagemDaEstrada);
  if(!(placar >= 10 || placar2 >=10))
jogo();
else
mostraVencedor();
}
 //fim draw

function jogo(){
  mostraAtor();
  movimentaAtor();
  mostraCarro();
  movimentaCarro();
  verificaColisao();
  mostraPlacar();
  mostraAtor2();
  movimentaAtor2();
  mostraPlacar2();
  verificaColisao2();
}