class TelaInicial {
  constructor(){
    
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(70);
    text('A bruxinha WilloW', width/2, height/3.5);
    textSize(50);
    text('Em busca do Tesouro PerdidO', width/2, height/5*2);
    textSize(30);
    text('<ESTEJA ATENTO E SE DIVIRTA>', width/2, height/5*4);
    textSize(30);
    text('Enfrente os desafios da florestA', width/2, height/5*4.3);
  }
  
  _botao(){
    botaoGerenciador.draw();
  }
}