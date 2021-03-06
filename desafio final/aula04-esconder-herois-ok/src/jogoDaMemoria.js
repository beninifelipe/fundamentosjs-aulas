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
        this.iconePadrao = './arquivos/ninja.png'
        this.heroisEscondidos = []
    }
    // para usar o this, não podemos usar o static!
     inicializar(){
      // vai pegar todas as funcoes da classe tela!
      // coloca todos os herois na tela 
      this.tela.atualizarImagens(this.heroisIniciais)
      //força a tela a usar o THIS de jogo da memoria
      this.tela.configurarBotaoJogar(this.jogar.bind(this))
     }
     embaralhar() {
         const copias = this.heroisIniciais
         // duplicar os itens
         .concat(this.heroisIniciais)
         // entrar em cada item e criar um id aleatorio
         .map(item => {
             return Object.assign({}, item, { id: Math.random() / 0.5})
         })
         // ordenar aleatoriamente
         .sort(() => Math.random() - 0.5)

         this.tela.atualizarImagens(copias)
         // vamos esperar 1 segundo para atualizar a tela 
         setTimeout(() => {
             this.esconderHerois(copias)
         },2000);
     }
     esconderHerois(herois) {
         // vamos trocar as imagens de todos herois existentes
         // pelo icone padrao
         // como fizemos no constructor, vamos extrair somente o necessario
         // usando a sintaxe ({ chave: 1 }) estamos falando que vamos  retornar
         // o que tiver dentro dos parenteses 
         // quando nao usamos:  (exemplo do id), o JS entende  que o nome 
         // é o mesmo do valor. Ex: id: id, vira id,
         const heroisOcultos = herois.map(( {nome, id } ) => ({
             id,
             nome,
             img: this.iconePadrao
         }))
         // atualizamos a tela com os herois ocultos
         this.tela.atualizarImagens(heroisOcultos)
         // guardamos os herois para trabalhar com eles depois 
         this.heroisOcultos = heroisOcultos
     }
     jogar() {
      this.embaralhar()
     }
}