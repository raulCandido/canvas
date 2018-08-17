var canvas = document.querySelector("#meu_canvas")
var context = canvas.getContext('2d');

var imagem = new Image();
imagem.src = 'img/explosao.png';

imagem.onload = function () {
    context.drawImage(
        imagem,
        80, 10, 60, 65, //area de recorte (clipping)
        20, 20, 60, 65  //desenho do Canvas
    );
}