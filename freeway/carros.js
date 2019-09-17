//carro
let xCarros = [600,600,600,600,600,600];
let yCarros = [40, 98,150,210,260,310];
let velocidadeCarros = [15,5,1.75,10,8,7];
let comprimentoCarros = [50, 50, 80,50,50,80];
let altura = 40;

//funções
function mostraCarro(){
   //print("Quantidade de Carros"+imagensCarros.length);
   for(let i=0; i< imagensDoCarros.length; i++){
   image(imagensDoCarros[i], xCarros[i], yCarros[i], comprimentoCarros[i],  altura);
   }
}

  function movimentaCarro(){
   for(let i=0; i < imagensDoCarros.length; i++){
   xCarros[i] -= velocidadeCarros[i];
     if(xCarros[i] < -50){//faz eles voltarem//
      xCarros[i] = 600;
     }
   }
 }
   
  