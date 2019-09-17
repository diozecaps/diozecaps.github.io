//Definição das variáveis do Jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagensDoCarros = [];//Array de Imagens

//sons
let trilhaSonora;
let somColidiu;
let somPonto;

function preload(){
  //Pré-carregamento dos sons 
  trilhaSonora = loadSound("sons/trilha.mp3");
  somColidiu = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");        
  //Pré-carregamento das imagens das variáveis
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoAtor2 = loadImage("imagens/ator2.png");
  imagensDoCarros[0] = loadImage("imagens/carro-1.png");
  imagensDoCarros[1] = loadImage("imagens/carro-2.png");
  imagensDoCarros[2] = loadImage("imagens/carro-3.png");
  imagensDoCarros[3] = loadImage("imagens/carro-1.png");
  imagensDoCarros[4] = loadImage("imagens/carro-2.png");
  imagensDoCarros[5] = loadImage("imagens/carro-3.png");
}
