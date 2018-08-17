var canvas = document.querySelector("#meu_canvas")
var context = canvas.getContext('2d');

var imagem = new Image();
imagem.src = 'img/ovni.png';
//carregando a imagem no a funcao onload
//for para carregar a imagem 5 vezes com uma posiçao x ao lado direito
imagem.onload = function () {
    var x = 20;
    for (var i = 1; i <= 5; i++) {
        context.drawImage(imagem, x, 20, 64, 32);
        x += 70;
    }
}