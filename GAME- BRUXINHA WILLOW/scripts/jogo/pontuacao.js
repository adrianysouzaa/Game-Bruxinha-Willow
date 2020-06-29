class Pontuacao{
  constructor(){
    this.pontos = 0;
    this.fonte = loadFont('imagens/assets/fonteTelaInicial.otf');
  }
  
  exibe(){
    textAlign(RIGHT);
    fill('#fff');
    textSize(60);
    text(parseInt(this.pontos), width - 30, 50);
  }
  
  adicionarPonto(){
    this.pontos = this.pontos + 0.2;
    if(int(this.pontos) === 500){
      TelaFinal();
    }
  }
  
  exibePontuacaoFinal(altura) {
    textAlign(CENTER, CENTER);
    textSize(30);
    text('SEUS PONTOS: ' + int(this.pontos), ((windowWidth / 2)), (windowHeight / 2) + (altura));
    text('Pressione <ENTER> para jogar novamentE', ((windowWidth / 2)), ((windowHeight / 2) + (altura))+100);
  }
  
  exibeTelaFinal(altura) {
    textAlign(CENTER, CENTER);
    textSize(60);
    text('Conseguimoss!!', width/2, height/6);
    textSize(35);
    text('Chegou a 500 PONTOS!', width/2, height/4.1);
    textSize(30);
    text('Encontrou a irma perdida da Willow e o seu cajado sagradO!', width/2, height/2.5);
    textSize(30);
    text('OBRIGADO POR SER AVENTURAR COM A NOSSA BRUXINHA !!', width/2, height/2);
  }
}