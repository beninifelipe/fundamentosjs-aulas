function onLoad() {
  const dependencias = {
      tela: Tela,
      util: Util // a classe tela é global
  }
  // inicializamos o jogo da memoria
  const jogoDaMemoria = new JogoDaMemoria(dependencias)
  jogoDaMemoria.inicializar()
}
window.onload = onLoad