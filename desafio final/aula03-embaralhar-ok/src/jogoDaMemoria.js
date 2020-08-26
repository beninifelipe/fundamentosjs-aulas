class JogoDaMemoria {
    // se mandar um obj = { tela: 1, idade: 2, etc: 3}
    // vai ignorar o resto das propriedades e pegar  somente a propriedade 
    // tela 
    constructor ({ tela }) {
        this.tela = tela
        // caminho do arquivo, sempre relativo
        // ao index.html!
        this.heroisIniciais = [
            { img: './arquivos/antman.png', name: 'antman'},
            { img: './arquivos/capitainamerica.png', name: 'capitainamerica'},
            { img: './arquivos/groot.png', name: 'groot'},
            { img: './arquivos/ironman.png', name: 'ironman'},
        ]
    }
    // para usar o this, não podemos usar o static!
     inicializar(){
      // vai pegar todas as funcoes da classe tela!
      // coloca todos os herois na tela 
      this.tela.atualizarImagens(this.heroisIniciais)
     }
}